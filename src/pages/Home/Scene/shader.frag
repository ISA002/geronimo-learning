#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_res;

uniform sampler2D u_image;
uniform sampler2D u_imagehover;

uniform float u_time;

varying vec2 vTextureCoord;

// ---------------- mouse effect ----------------
float circle(in vec2 _st, in float _radius, in float blurriness) {
    vec2 dist = _st;
    return 1.-smoothstep(_radius - (_radius * blurriness), _radius +
     (_radius * blurriness), dot(dist, dist) * 4.0);
}

vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}

float mod10(float x) {
    return x - (10. * floor(x / 10.0));
}

vec4 permute(vec4 x) {
    return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
    return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise3(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute( permute( permute(
                i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;

    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
        dot(p2,x2), dot(p3,x3) ) );
}


// ---------------- water noise ----------------
float random (in vec2 _st) {
    return fract(sin(dot(_st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise (in vec2 _st) {
    vec2 i = floor(_st);
    vec2 f = fract(_st);

    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
            (c - a)* u.y * (1.0 - u.x) +
            (d - b) * u.x * u.y;
}

float fbm( in vec2 _st) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);

    mat2 rot = mat2(cos(0.5), sin(0.5),
                    -sin(0.5), cos(0.50));
    for (int i = 0; i < 5; ++i) {
        v += a * noise(_st);
        _st = rot * _st * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}


// ---------------- main ----------------
void main() {

    // ---------------- mouse effect ----------------
    float time_smal = u_time / 2.5;
    vec2 res = u_res;
    vec2 st = gl_FragCoord.xy / res.xy - vec2(0.5);
    st.y *= u_res.y / u_res.x;

    vec2 mouse = u_mouse * -1.0;

    vec2 circlePos = st + mouse;
    float c = circle(circlePos, 0.15, 2.) * 2.5;

    float offx = vTextureCoord.x + sin(vTextureCoord.y + time_smal * .1);
    float offy = vTextureCoord.y - time_smal * 0.1 - cos(time_smal * .001) * .01;

    float n = snoise3(vec3(offx, offy, time_smal * .1) * 8.) - 1.;

    float finalMask = smoothstep(0.4, 0.5, n + pow(c, 2.));
    vec4 hover = texture2D(u_imagehover, vTextureCoord);
    
    // ---------------- water noise ----------------
    vec3 color = vec3(0.0);

    vec2 q = vec2(0.);
    q.x = fbm( vTextureCoord + 0.00 * u_time);
    q.y = fbm( vTextureCoord + vec2(1.0));

    vec2 r = vec2(0.);
    r.x = fbm( vTextureCoord + 1.0 * q + vec2(1.7, 9.2)+ 0.15 * u_time );
    r.y = fbm( vTextureCoord + 1.0 * q + vec2(8.3, 2.8)+ 0.126 * u_time);

    float f = fbm(vTextureCoord + r);

    color = mix(vec3(0., 0., 0.),
                vec3(0.888, 0.894, 1),
                clamp((f * f) * 4.0, 0.0, 1.0));

    color = mix(color,
                vec3(0., 0., 0.),
                clamp(length(q), 0.0, 1.0));

    color = mix(color,
                vec3(1., 1., 1.),
                clamp(length(r.x), 0.0, 1.0));

    vec4 displace = vec4(color, 1.);
    float displace_k  = displace.g * 0.07;
    vec2 uv_displaced = vec2(vTextureCoord.x + displace_k, vTextureCoord.y + displace_k);
    vec4 imageWaterWrapper = texture2D(u_image, uv_displaced);

    // ---------------- final ----------------
    vec4 imageMFEkl = texture2D(u_image, vTextureCoord.xy);
    vec4 finalImage = mix(imageMFEkl, hover, finalMask);


    // ---------------- pixel color ----------------
    gl_FragColor = imageMFEkl;
}
