/* eslint-disable no-param-reassign */

import { createSlice } from 'redux-starter-kit';

import actionTypes from 'utils/actionTypes';

const infoSlice = createSlice({
  name: 'info',
  initialState: {
    collection: [
      {
        title: 'TV',
        subtitle: '',
        id: 5,
        preview: {
          video_url:
            'https://geronimo.be/system/uploads/case/preview_video/000/000/110/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_TV_V1_1.mov',
          image_urls: {
            original:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/case_image.jpg',
            preview:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/version_case_image.jpg',
            preview_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/version_x2_case_image.jpg',
            mobile:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/mobile_case_image.jpg',
            mobile_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/110/mobile_x2_case_image.jpg',
          },
          gif_url:
            'https://geronimo.be/system/uploads/case/preview_gif/000/000/110/Reel%20video%201%20TV.gif',
        },
        slug: 'tv',
      },
      {
        title: 'FILM',
        subtitle: '',
        id: 6,
        preview: {
          video_url:
            'https://geronimo.be/system/uploads/case/preview_video/000/000/111/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_FILM_V1_1.mov',
          image_urls: {
            original:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/case_image.jpg',
            preview:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/version_case_image.jpg',
            preview_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/version_x2_case_image.jpg',
            mobile:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/mobile_case_image.jpg',
            mobile_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/mobile_x2_case_image.jpg',
          },
          gif_url:
            'https://geronimo.be/system/uploads/case/preview_gif/000/000/111/Reel%20video%202%20Film.gif',
        },
        slug: 'film',
      },
      {
        title: 'PUB',
        subtitle: '',
        id: 7,
        preview: {
          video_url:
            'https://geronimo.be/system/uploads/case/preview_video/000/000/112/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_PUB_V1_1.mov',
          image_urls: {
            original:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/case_image.jpg',
            preview:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/version_case_image.jpg',
            preview_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/version_x2_case_image.jpg',
            mobile:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/mobile_case_image.jpg',
            mobile_x2:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/mobile_x2_case_image.jpg',
          },
          gif_url:
            'https://geronimo.be/system/uploads/case/preview_gif/000/000/136/Radio%201.gif',
        },
        slug: 'pub',
      },
    ],
    filmCollection: {
      show_category: {
        description:
          '<p>Throughout the years, Geronimo has established itself as an authentic and inventive voice within the Belgian television landscape and beyond. Geronimo continues to distinguish itself by producing adventurous, gripping and relevant content about real, genuine people. Having been nominated three times in a row for an international Emmy award for Missie Mosango, Soundtrack and Flying Doctors, Geronimo persists in maintaining high production value. The popular Helden Van Hier series introduced a large audience to a behind-the-scenes look of our emergency services and workers and documentary series Het Gezin offered a never before seen perspective on family life. Geronimo continues to push the envelope and is constantly creating original and captivating tv programs.</p>',
        id: 6,
        title: 'FILM',
        subtitle: '',
        address:
          '<p>Geronimo</p><p>Indiëstraat 12b</p><p>B-2000 Antwerp</p><p></p><p></p>',
        map_image_url:
          'https://geronimo.be/system/uploads/category/map_image/000/000/006/category_image.jpg',
        phone: '',
        email: 'info@geronimo.be',
        keyword: 'Film',
        map_link: 'https://www.google.com/maps/@56.8537936,35.873007,15z',
        logo_url:
          'https://geronimo.be/system/uploads/category/logo/000/000/006/category_image.jpg',
        cases: [
          {
            description:
              '<p>Antwerp’s most famous fire station is suddenly under attack. The reckless and brave attitude that once made them successful and popular is no longer tolerated. When the charismatic officer and leader gets laid off, the team is a rudderless ship. Can they overcome the challenges that a new and ambitious supervisor and dissatisfied inhabitants bring and regain respect?</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/141/case_image.jpg',
            title: 'UNDER FIRE',
            subtitle: 'DRAMA SERIES',
            id: 141,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/141/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/141/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/141/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/141/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/141/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/141/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/141/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/141/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>Moses, a young African is send to the promised land of Europe to make it as a professional football player and to follow in the footsteps of his uncle who financially supported the poor fishing village. On his dangerous journey the talented but naïve villager is confronted for the first time with the world, with others and with himself, but his uninhibited optimism makes him persevere.</p><p>Co-production with Fobic Films</p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/151/case_image.jpg',
            title: 'MOSES',
            subtitle: 'ROAD MOVIE',
            id: 151,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/151/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/151/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/151/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/151/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/151/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/151/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/151/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/151/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>When medical help is most urgent, the Medic One takes off. This fully equipped medical rescue helicopter can reach any destination much faster than an ambulance. In Medic One we follow the medical staff that flies out with the helicopter. Each episode tells the story of the men and women fighting for other people’s lives. But this demanding job, where lives are on the line daily, impacts the crew’s own life and relationships. </p><p>Tune in for a 10-episode, mid-week, prime time tv series jam-packed with drama, emotions, action and crazy pilots.</p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/142/case_image.jpg',
            title: 'MEDIC ONE ',
            subtitle: 'DRAMA SERIES',
            id: 142,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/142/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/142/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/142/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/142/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/142/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/142/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/142/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/142/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>A well-known actress announces she’ll commit to an online multiple day live-stream in her home, where viewers will have the chance to decide what she has to do. During the course of the broadcast it becomes clear that her household appliances have been hacked, providing audio and video feed, and that she’s being blackmailed. The viewers will be able to decide how far they’ll go along up until the hacker presents them with a final online poll that will determine the outcome of the series.</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/152/case_image.jpg',
            title: 'HACKER',
            subtitle: 'WEBSERIES',
            id: 152,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/152/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/152/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/152/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/152/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/152/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/152/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/152/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/152/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>The brothers "De Smet" created a system to live their lives as single men in the most comfortable way. When a new female neighbor arrives their synergy collapses like a house of cards.</p>',
            video_vimeo_url: 'https://vimeo.com/303005629',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/071/case_image.jpg',
            title: 'DE SMET',
            subtitle: 'DIRECTED BY WIM GEUDENS & THOMAS BAERTEN',
            id: 71,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/071/FILM_desmet.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/071/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/071/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/071/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/071/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/071/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/071/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/071/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/071/DE%20SMET.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/005/award_image.jpg',
                title: 'Humo',
              },
            ],
          },
          {
            description:
              "<p>One of the Baba's disappears from the face of the earth and his friends find him back. In doing so, the Baba's take it on against the evil Cordelia Zen, witch is trying to deprive all children of their spontaneity and joy of life.</p>",
            video_vimeo_url: 'https://vimeo.com/303005565',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/073/case_image.jpg',
            title: 'BABA YEGA THE MOVIE',
            subtitle: 'DIRECTED BY MICHAEL & ANDREW VAN OSTADE',
            id: 73,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/073/FILM_babayega.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/073/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/073/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/073/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/073/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/073/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/073/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/073/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/073/BABA%20YEGA%20THE%20MOVIE.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/002/award_image.jpg',
                title: 'Film Festival Oostende Ensors',
              },
            ],
          },
          {
            description:
              '<p>Gerald is working as a clown in a modest circus. Joylessly he fulfills his daily routine. While his father is on his deathbed, he makes a phone call to his mother that reveals an unresolved past. This past appears to be the reason of the hard choices he made in his life.</p>',
            video_vimeo_url: 'https://vimeo.com/303005617',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/072/case_image.jpg',
            title: 'GERALDO',
            subtitle: 'DIRECTED BY DIRK DOMEN',
            id: 72,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/072/FILM_Geraldo.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/072/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/072/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/072/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/072/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/072/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/072/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/072/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/072/GERALDO.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/006/award_image.jpg',
                title: 'KKl',
              },
            ],
          },
          {
            description:
              '<p>They’re always working under the radar and only rush out when others run away. In Special Forces we follow an elite team of special forces that are called upon when local police is no longer fit to do the job. Terrorism, kidnappings, shoot-outs, surveillance, … They always answer the call. </p><p>But this job is never without risk. </p><p>And when the job is done, it’s hard not to take it home.</p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/143/case_image.jpg',
            title: 'FAST RESPONSE',
            subtitle: 'DRAMA SERIES',
            id: 143,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/143/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/143/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/143/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/143/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/143/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/143/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/143/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/143/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>Teenage daughters Nola (15) and Liz (13) sort the contents of their grandfather’s house with their father Simon. Grandfather Robert lived happily as a single man most of his life, but now his progressive dementia forces son Simon to seek sell his home. While cleaning the house they come across recent unopened mail from Norway written by Janne. Her mother Kristiane is terminal and she has asked Janne to look for Robert: she wants to see him and her son one last time. Unsettled Simon contacts Janne. That son she writes about? Is that... him!? Is Kristiane his “deceased” mother!? Janne has no answers. Simon confronts his father, but Roberts memory is peeling away. </p><p>For daughters Nola and Liz the solution is obvious: dad has to go to Norway with granddad to find the answers. Simon couldn’t agree less. He is mad like hell at his father who has lied to him his whole lifetime. The girls steal the keys of grandfather’s van from their father - Simon did not want his father to drive anymore - and set off. It is the start of an adventurous journey to the north with a demented grandfather behind the wheel and two teenage girls next to him. Nola and Liz discover that the on-board cassettes with Robert’s favorite music triggers his memories. Kilometer by kilometer, doo-wop by ballad by rock song, the girls learn the truth about Robert, Kristiane and their father.</p><p>As soon as Simon and Valerie discover what their daughters are up to, the divorcing couple climbs in the car and give chase. </p><p>‘The Singalong Man’ is a road movie through the soothing landscapes of Norway and past the emotional crevices of the three generations undertaking this trip. Grandfather Robert sees a lifetime of memories disappear like the landscapes that just went by. Simon and Valerie ask themselves at what time in their relationship they took a wrong turn. And the two teenage girls haven’t figured out yet how life’s gps is working.</p><p>Co-production with Fobic Films </p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/153/case_image.jpg',
            title: 'THE SINGALONG MAN',
            subtitle: 'DRAMADY',
            id: 153,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/153/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/153/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/153/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/153/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/153/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/153/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/153/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/153/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>100 MINUTES TO PROTECT ANTWERP FROM A CATASTROPH </p><p>The Waaslandtunnel in Antwerp is a ticking time bomb. Outdated, poorly maintained and not suited for the more than ten thousand cars that drive through it daily. In the The Tunnel, Antwerp is struck by its biggest disaster since World War II; a huge fire that breaks out in the tunnel underneath the river Schelde which may cost the lives of hundreds of innocent people. </p><p>The film tells the story of the firefighters and other caseworkers and their heroic attempts to rescue the victims in real-time.</p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/144/case_image.jpg',
            title: 'THE TUNNEL',
            subtitle: 'ACTION FILM',
            id: 144,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/144/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/144/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/144/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/144/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/144/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/144/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/144/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/144/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              "<p>The documentary 'Sharkwise' happens in the beautiful Egypt, Mozambique and South-Africa. Marc Sluzny and his team are preparing the ultimate mission: to dive with the feared great white shark. During the roadmovie the audience is being immersed by breathtaking footage of nature. As well undeer the water as above the water, Marc Sluzny shares his experiences, disappointments and successes with his team.</p>",
            video_vimeo_url: 'https://vimeo.com/303006249',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/067/case_image.jpg',
            title: 'SHARKWISE',
            subtitle: 'DIRECTED BY EMANUEL VANDERJEUGD & STEFAAN LEDEGANCK',
            id: 67,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/067/FILM_sharkwise.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/067/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/067/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/067/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/067/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/067/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/067/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/067/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/067/SHARKWISE.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/309092714',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/111/case_image.jpg',
            title: 'Reel video 2 Film',
            subtitle: '',
            id: 111,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/111/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_FILM_V1_1.mov',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/111/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/111/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/111/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/111/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/111/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/111/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/111/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/111/Reel%20video%202%20Film.gif',
            awards: [],
          },
          {
            description:
              '<p>Li Li, a young girl disguised as a tourist, comes to Zonnedorp to call on Jommeke’s help. An ancient statue of the god Shennong proclaimed a plague over her village, Houtouwan: Shennong’s wrath. Ever since, a parasitic plant made life impossible in the village. Professor Gobelijn, the smartest man in the world, discovers that the plant has been manipulated and they can only reverse the effect if they make a serum and add the legendary and elusive Flower of Heaven. </p><p>Jommeke and his friends will have to go to Shanghai and into the Chinese wilderness to find the flower. Our heroes will have to face an unknown villain as they head out on an adventure where they will meet an old botanist and a beekeeper that thinks he’s the last tiger in China. With a similar plague outbreak in Zonnedorp, Jommeke and his friends now have to save two villages. </p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/155/case_image.jpg',
            title: "JOMMEKE: SHENNONG'S WRATH",
            subtitle: 'LIVE-ACTION FAMILY FILM',
            id: 155,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/155/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/155/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/155/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/155/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/155/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/155/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/155/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/155/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>A mysterious sphere crash-lands in the garden of a financially troubled entrepreneur, Horace. When confronted with this object, a musical discourse follows, as he finds out that the egg-shaped object sings a most beautiful yet haunting melody. Overcome by sheer fascination, he hopes to monetize this discovery to come out of his financial slump. Soon the whole town is involved. What follows is a series of confrontations and events that will change the way you look at the musical nature of cinema.</p>',
            video_vimeo_url: 'https://vimeo.com/191528876',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/070/case_image.jpg',
            title: 'SONGS FROM THE OUTSIDE',
            subtitle: 'DIRECTED BY MICHAEL VAN OSTADE',
            id: 70,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/070/SONGS_FROM_THE_OUTSIDE.mp4',
            director_slug: 'michael-van-ostaden',
            director_full_name: 'Michael Van Ostade',
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/070/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/070/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/070/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/070/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/070/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/070/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/070/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/070/SONGS%20FROM%20THE%20OUTSIDE.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/001/award_image.jpg',
                title: 'Brussels International Fantastic Film Festival',
              },
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/007/award_image.jpg',
                title: 'KKL2',
              },
            ],
          },
          {
            description:
              "<p>The Importance of Sweet and Salt is a black comedy about a man's inner struggle to escape from an extremely dysfunctional relationship with his wife. While preparing dinner for his spouse, the man contemplates his current predicament and comes to question his sanity.</p>",
            video_vimeo_url: 'https://vimeo.com/303005909',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/068/case_image.jpg',
            title: 'THE IMPORTANCE OF SWEET AND SALT',
            subtitle: 'DIRECTED BY BENOIT DE CLERCK',
            id: 68,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/068/FILM_sweetandsalt.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/068/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/068/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/068/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/068/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/068/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/068/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/068/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/068/THE%20IMPORTANCE%20OF%20SWEET%20AND%20SALT.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/006/award_image.jpg',
                title: 'KKl',
              },
            ],
          },
          {
            description:
              '<p>Ruis is a short film inspired by the life story of Dietrich Hectors, a young man of 29 years who left life at the end of 2009 because of his problems with tinnitus and hyperacusis. A story that literally makes you quiet.</p>',
            video_vimeo_url: 'https://vimeo.com/303005853',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/069/case_image.jpg',
            title: 'RUIS',
            subtitle: 'DIRECTED BY DIRK DOMEN',
            id: 69,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/069/FILM_ruis.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/069/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/069/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/069/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/069/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/069/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/069/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/069/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/069/RUIS.gif',
            awards: [],
          },
          {
            description:
              '<p>Speakbeast is the name of an Interspecies Communications company run by Marieke Méchant and Pauline Reynaerde, high technology’s upcoming first ladies. Talking peace doves, Shakespeare performed by a rodents-only cast, beef cattle with identity crises, … </p><p>Speakbeast’s growing influence in society ultimately results in a parakeet being appointed as crown witness in a murder trial. </p><p>The series is a genre mix of the rise-and-fall story of a company that becomes too big to fail and a whodunit about the murder of a star soccer player. Part farce, part tragic. A dark comedy.</p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/148/case_image.jpg',
            title: 'SPEAKBEAST',
            subtitle: 'DRAMA SERIES',
            id: 148,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/148/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/148/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/148/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/148/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/148/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/148/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/148/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/148/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>Vera Bauwens (36) is a hardworking market vendor and single mom. She raises Jeff, her ten-year-old physically disabled son. He suffers from CMD, a disease that causes progressive muscle weakness and severe breathing difficulties. Vera struggles a great deal with the physical, mental and financial toll that this causes in their daily family life. In her rare spare time, coached by her father Robert (70), she is successfully building on a professional boxing career. A career she sees as her way out of her difficult challenges.</p><p> When she wins an important boxing match she gets a shot at the World Champion ship. She gets to fight the undisputed featherweight boxing world champion. This fight will mean an end to her financial struggles. A chance to finally give her son and herself the stable and comfortable life they deserve. </p><p>Then destiny strikes. She gets diagnosed with breast cancer and needs to get treated immediately. This jeopardises her upcoming life altering boxing match. She decides to put on hold her treatment until after the championship. Her father who- although wanting nothing more than realising this life long dream, his daughter that he trained on a world stage of professional boxing- cannot see his daughter destroy herself. He won’t allow this. He decides to stop her from contending and refuses as her coach to sign the championship contracts. She sees this sabotage as the ultimate betrayal.</p><p> She won’t and can’t let this happen.</p><p>For her son she will get in that ring, no matter what. </p><p>Co-production with Fobic Films </p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/149/case_image.jpg',
            title: 'FIERCE',
            subtitle: 'DRAMADY',
            id: 149,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/149/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/149/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/149/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/149/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/149/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/149/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/149/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/149/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>2014. While Europe is divided by terrorist attacks, a young Moroccan named Rachid tries to make his way growing up in the Canal Zone of Molenbeek, Brussels. Over time, Rachid and his friends wind up in small criminality. But despite of this, Rachid remains an insecure and humble boy. He still can’t stand up against his family, bigger brother and peer pressure from his friends. Football is the only thing that makes Rachid really feel free. </p><p>After a small criminal action that goes south, Rachid is blackmailed by physical coach Aron Smidt (40) and is forced to play soccer at Eendracht VC, an all-white and all-Flemish soccer team. Things can’t get worse for Rachid: his family and friends can’t believe he plays for a white football team and the team itself can’t believe Rachid plays for them. Despite the racism, Rachid starts blending in and even falls in love with Lotte De Greef, one of his teammate’s sister. </p><p>As Brussels is hit by a wave of terrorist attacks, racism between the different ethnic groups comes to a boiling point. In society as well as on the soccer pitch.</p><p>Can Rachid make his own choices? Can he stand up to his family? Can he convince his racist teammates they are all equal?</p><p>Co-production with Fobic Films</p>',
            video_vimeo_url: 'https://vimeo.com/367418586',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/150/case_image.jpg',
            title: 'TRUE HEROES',
            subtitle: 'SPORTS DRAMA / YOUTH FILM',
            id: 150,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/150/COMING_SOON_V1.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'film',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/150/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/150/film_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/150/film_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/150/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/150/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/150/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/150/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
        ],
        social_links: [
          {
            title: 'Facebook',
            link: 'https://www.facebook.com/GeronimoProductions/',
          },
          {
            title: 'Instagram',
            link: 'https://www.instagram.com/geronimo_tv/ ',
          },
          {
            title: 'Twitter',
            link: 'https://twitter.com/GeronimoTV_',
          },
        ],
        partners: [],
      },
    },
    pubCollection: {
      show_category: {
        description:
          '<p>Jaw-dropping television commercials, mind-blowing online video content and kick-ass advertising wizardry in general. Geronimo’s publicity branch has over the years established itself as a creative haven for all sorts of companies, brands, organizations and projects.</p>',
        id: 7,
        title: 'PUB',
        subtitle: '',
        address:
          '<p>Geronimo</p><p>Indiëstraat 8</p><p>B-2000 Antwerp</p><p></p><p></p>',
        map_image_url:
          'https://geronimo.be/system/uploads/category/map_image/000/000/007/category_image.jpg',
        phone: '',
        email: 'info@geronimo.be',
        keyword: 'Pub',
        map_link: 'https://www.google.com/maps/@56.8537936,35.873007,15z',
        logo_url:
          'https://geronimo.be/system/uploads/category/logo/000/000/007/category_image.jpg',
        cases: [
          {
            description:
              '<p>Agency: DDB Brussels</p><p>Director: Jan Boon</p><p>DOP: Anton Mertens</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014482',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/091/case_image.jpg',
            title: 'STUDIO BRUSSEL',
            subtitle: 'MUSIC FOR LIFE',
            id: 91,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/091/PUB_musicforlife.mp4',
            director_slug: 'raf-reyntjens',
            director_full_name: 'Raf Reyntjens',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/091/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/091/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/091/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/091/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/091/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/091/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/091/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/091/STUDIO%20BRUSSEL.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/014/award_image.jpg',
                title: 'CCB PRESS',
              },
            ],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/303021629',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/074/case_image.jpg',
            title: 'HET LAATSTE NIEUWS',
            subtitle: 'AGATHA CHRISTIE',
            id: 74,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/074/PUB_hetlaatstenieuws.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/074/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/074/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/074/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/074/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/074/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/074/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/074/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/074/HET%20LAATSTE%20NIEUWS.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/253781624/351577f0c5',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/133/case_image.jpg',
            title: '2DEHANDS.BE',
            subtitle: '',
            id: 133,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/133/2DEHANDS_AUTO.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/133/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/133/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/133/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/133/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/133/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/133/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/133/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/133/2DEHANDS.BE.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/318185199',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/130/case_image.jpg',
            title: 'MORT SUBITE',
            subtitle: '',
            id: 130,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/130/MORT_SUBITE.mp4',
            director_slug: 'benoit-declerck-3',
            director_full_name: 'Benoit Declerck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/130/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/130/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/130/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/130/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/130/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/130/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/130/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/130/MORT%20SUBITE.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: DDB Brussels</p><p>Director: Jan Boon</p><p>DOP: Anton Mertens</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014569',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/088/case_image.jpg',
            title: 'STUDIO BRUSSEL',
            subtitle: 'MUSIC FOR LIFE',
            id: 88,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/088/PUB_MFL2.mp4',
            director_slug: 'jan-boon-1',
            director_full_name: 'Jan Boon',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/088/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/088/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/088/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/088/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/088/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/088/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/088/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/088/STUDIO%20BRUSSEL.gif',
            awards: [],
          },
          {
            description:
              '<p>Director: Willy Crank</p><p>DOP: Frederic Van Zandycke</p>',
            video_vimeo_url: 'https://vimeo.com/303014147',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/100/case_image.jpg',
            title: 'PROVINCIE WEST-VLAANDEREN',
            subtitle: 'GONE WEST',
            id: 100,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/100/PUB_westvlaanderen.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/100/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/100/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/100/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/100/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/100/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/100/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/100/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/100/PROVINCIE%20WEST-VLAANDEREN.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: Liquid Society</p><p>Director: Jeroen Willekens</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303021311',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/084/case_image.jpg',
            title: 'BOSS PAINTS',
            subtitle: 'EXPERTS IN EVERY STEP',
            id: 84,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/084/PUB_bosspaints.mp4',
            director_slug: 'jeroen-willekens-8',
            director_full_name: 'Jeroen Willekens',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/084/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/084/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/084/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/084/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/084/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/084/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/084/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/084/BOSS%20PAINTS.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: Lucy</p><p>Director: Benny Vandendriessche</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014032',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/104/case_image.jpg',
            title: 'KLARA',
            subtitle: 'THE VOICE EDITION',
            id: 104,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/104/PUB_Klara.mp4',
            director_slug: 'benny-vandendriescche-6',
            director_full_name: 'Benny Vandendriescche',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/104/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/104/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/104/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/104/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/104/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/104/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/104/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/104/KLARA.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: Famousgrey</p><p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014414',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/093/case_image.jpg',
            title: 'KOM OP TEGEN KANKER',
            subtitle: 'EVERYONE AGAINST CANCER',
            id: 93,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/093/PUB_komoptegenkanker.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/093/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/093/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/093/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/093/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/093/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/093/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/093/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/093/KOM%20OP%20TEGEN%20KANKER.gif',
            awards: [],
          },
          {
            description:
              '<p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014326',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/096/case_image.jpg',
            title: 'EVA',
            subtitle: 'VEGGIE THURSDAY',
            id: 96,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/096/PUB_eva.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/096/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/096/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/096/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/096/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/096/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/096/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/096/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/096/EVA.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: Saatchi &amp; Saatchi</p><p>Director: Michael Bombeeck</p><p>DOP: Frederic Van Zandycke</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014605',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/087/case_image.jpg',
            title: 'BELFIUS',
            subtitle: 'BOIC',
            id: 87,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/087/PUB_BOIC.mp4',
            director_slug: 'michael-bombeeckk-2',
            director_full_name: 'Michael Bombeeck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/087/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/087/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/087/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/087/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/087/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/087/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/087/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/087/BELFIUS.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/349003886',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/137/case_image.jpg',
            title: 'Plan België ',
            subtitle: '',
            id: 137,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/137/PLAN_BE_VANAF_12J__VIER_VIJF_.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/137/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/137/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/137/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/137/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/137/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/137/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/137/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/137/Plan%20Belgi%C3%AB%20.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/015/award_image.jpg',
                title: 'Eurobest 2014',
              },
            ],
          },
          {
            description:
              '<p>Agency: DDB Brussels</p><p>Director: Michael Bombeeck</p><p>DOP: David Doom</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303013915',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/106/case_image.jpg',
            title: 'UNIBET',
            subtitle: 'ONLY REAL PLAYERS BET',
            id: 106,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/106/PUB_unibet_onlyrealplayersbet.mp4',
            director_slug: 'michael-bombeeckk-2',
            director_full_name: 'Michael Bombeeck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/106/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/106/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/106/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/106/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/106/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/106/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/106/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/106/UNIBET.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/289046076',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/117/case_image.jpg',
            title: 'DELIO',
            subtitle: 'TONIJNSALADE',
            id: 117,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/117/DELIO_TONIJN.mp4',
            director_slug: 'benoit-declerck-3',
            director_full_name: 'Benoit Declerck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/117/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/117/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/117/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/117/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/117/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/117/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/117/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>Director: Odin Saillé</p><p>DOP: David Doom</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303013889',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/108/case_image.jpg',
            title: 'HIERBAS DE LAS DUNAS',
            subtitle: 'LIFE AT 120 BPM',
            id: 108,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/108/PUB_hierbasdelasdunas.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/108/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/108/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/108/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/108/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/108/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/108/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/108/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/108/HIERBAS%20DE%20LAS%20DUNAS.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/270605554',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/128/case_image.jpg',
            title: 'LUXURY OUTLET',
            subtitle: '',
            id: 128,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/128/LUXURY_OUTLET.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/128/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/128/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/128/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/128/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/128/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/128/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/128/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/128/LUXURY%20OUTLET.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/349004710',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/136/case_image.jpg',
            title: 'Radio 1',
            subtitle: 'De grote levensvragen',
            id: 136,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/136/RADIO1_ASTRONAUT_SEPT_2017.mp4',
            director_slug: 'benoit-declerck-3',
            director_full_name: 'Benoit Declerck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/136/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/136/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/136/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/136/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/136/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/136/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/136/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/136/Radio%201.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/009/award_image.jpg',
                title: 'CCB FILM SHORTLIST',
              },
            ],
          },
          {
            description:
              '<p>Agency: Content Cowboys</p><p>Director: Dirk Domen</p><p>DOP: Emanuel Vanderjeugd</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303021535',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/078/case_image.jpg',
            title: 'BOBBEJAANLAND',
            subtitle: 'THE FORBIDDEN CAVES',
            id: 78,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/078/PUB_bobbejaanland.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/078/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/078/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/078/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/078/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/078/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/078/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/078/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/078/BOBBEJAANLAND.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: LDV United</p><p>Director: Dirk Domen</p><p>DOP: Emanuel Vanderjeugd</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303021556',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/077/case_image.jpg',
            title: 'GAZET VAN ANTWERPEN',
            subtitle: 'RUBENS',
            id: 77,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/077/PUB_GVA.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/077/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/077/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/077/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/077/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/077/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/077/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/077/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/077/GAZET%20VAN%20ANTWERPEN.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/297684644/be0497f4c6',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/127/case_image.jpg',
            title: 'ALL BLUES DAY',
            subtitle: 'CLUB BRUGGE',
            id: 127,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/127/CLUB_BRUGGE.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/127/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/127/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/127/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/127/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/127/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/127/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/127/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/127/ALL%20BLUES%20DAY.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: FamousGrey</p><p>Director: Emanuel Vanderjeugd</p><p>DOP: Emanuel Vanderjeugd</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014667',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/085/case_image.jpg',
            title: 'NMBS',
            subtitle: '30 COUNTRIES, 30 DAYS',
            id: 85,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/085/PUB_nmbs.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/085/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/085/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/085/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/085/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/085/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/085/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/085/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/085/NMBS.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/241146176/73cbad6736',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/120/case_image.jpg',
            title: 'DE WARMSTE WEEK ',
            subtitle: 'LIFE IS MUSIC - STUDIO BRUSSEL',
            id: 120,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/120/MUSIC4LIFE_BALLERINA.mp4',
            director_slug: 'raf-reyntjens',
            director_full_name: 'Raf Reyntjens',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/120/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/120/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/120/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/120/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/120/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/120/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/120/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/120/DE%20WARMSTE%20WEEK%20.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: Mortierbrigade</p><p>Director: Jeroen Willekens</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014096',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/102/case_image.jpg',
            title: 'ING',
            subtitle: 'RED DEVILS',
            id: 102,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/102/PUB_ING.mp4',
            director_slug: 'jeroen-willekens-8',
            director_full_name: 'Jeroen Willekens',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/102/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/102/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/102/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/102/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/102/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/102/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/102/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/102/ING.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/294541870/6218bbd1dc',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/125/case_image.jpg',
            title: 'ALPRO',
            subtitle: 'WORD DE PRO IN ALPRO',
            id: 125,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/125/ALPRO.mp4',
            director_slug: 'jeroen-willekens-8',
            director_full_name: 'Jeroen Willekens',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/125/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/125/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/125/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/125/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/125/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/125/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/125/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/125/ALPRO.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: Famous</p><p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303021476',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/080/case_image.jpg',
            title: 'VLAM',
            subtitle: 'WEEK OF THE BELGIAN FRIES',
            id: 80,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/080/PUB_VLAM_fries.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/080/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/080/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/080/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/080/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/080/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/080/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/080/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/080/VLAM.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/290899517',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/121/case_image.jpg',
            title: "O'TACOS",
            subtitle: '',
            id: 121,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/121/O_TACOS.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/121/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/121/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/121/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/121/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/121/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/121/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/121/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              "/system/uploads/case/preview_gif/000/000/121/O'TACOS.gif",
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/318181518',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/131/case_image.jpg',
            title: 'BMW',
            subtitle: '',
            id: 131,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/131/BMW_STREETART.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/131/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/131/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/131/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/131/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/131/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/131/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/131/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/131/BMW.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: AIR</p><p>Director: Michael Bombeeck</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014456',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/092/case_image.jpg',
            title: 'BMW',
            subtitle: 'THE M4',
            id: 92,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/092/PUB_bmw_m4.mp4',
            director_slug: 'michael-bombeeckk-2',
            director_full_name: 'Michael Bombeeck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/092/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/092/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/092/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/092/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/092/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/092/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/092/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/092/BMW.gif',
            awards: [],
          },
          {
            description:
              "<p>Agency: d'Artagnan</p><p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p><p></p>",
            video_vimeo_url: 'https://vimeo.com/303014066',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/103/case_image.jpg',
            title: 'ERA',
            subtitle: 'THE ERA-EFFECT',
            id: 103,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/103/PUB_era.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/103/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/103/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/103/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/103/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/103/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/103/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/103/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/103/ERA.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/218628361',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/132/case_image.jpg',
            title: 'DEVOS&LEMMENS',
            subtitle: 'DE HOFFELIJKE ZOMER',
            id: 132,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/132/DEVOS_EN_LEMMENS_BBQ_DAK_.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/132/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/132/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/132/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/132/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/132/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/132/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/132/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/132/DEVOS%26LEMMENS.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/286323798',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/126/case_image.jpg',
            title: 'LE BON FROMAGE EST VITE CHOISI',
            subtitle: 'BRUGGE KAAS ',
            id: 126,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/126/BRUGGE_KAAS.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/126/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/126/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/126/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/126/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/126/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/126/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/126/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/126/LE%20BON%20FROMAGE%20EST%20VITE%20CHOISI.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/279613753/008c1afd90',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/118/case_image.jpg',
            title: 'FRISK',
            subtitle: 'MENTHOL COACH',
            id: 118,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/118/FRISK_HELI.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/118/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/118/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/118/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/118/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/118/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/118/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/118/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/118/FRISK.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/313140480/92fbbe199d',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/119/case_image.jpg',
            title: 'LIBELLE KERST',
            subtitle: '',
            id: 119,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/119/LIBELLE_KERST.mp4',
            director_slug: 'michael-bombeeckk-2',
            director_full_name: 'Michael Bombeeck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/119/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/119/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/119/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/119/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/119/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/119/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/119/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/119/LIBELLE%20KERST.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: LDV United</p><p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014306',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/097/case_image.jpg',
            title: 'DEVOS LEMMENS',
            subtitle: 'TASTY HOLIDAYS',
            id: 97,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/097/PUB_DevosLemmens.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/097/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/097/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/097/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/097/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/097/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/097/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/097/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/097/DEVOS%20LEMMENS.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: DDB Brussels</p><p>Director: Michael Bombeeck</p><p>DOP: David Doom</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014374',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/094/case_image.jpg',
            title: 'UNIBET',
            subtitle: 'FROM PLAYERS, FOR PLAYERS',
            id: 94,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/094/PUB_unibet_forplayers.mp4',
            director_slug: 'michael-bombeeckk-2',
            director_full_name: 'Michael Bombeeck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/094/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/094/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/094/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/094/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/094/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/094/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/094/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/094/UNIBET.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/252224121/5bff19d068',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/134/case_image.jpg',
            title: 'BELFIUS',
            subtitle: '',
            id: 134,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/134/BELFIUS.mp4',
            director_slug: 'benoit-declerck-3',
            director_full_name: 'Benoit Declerck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/134/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/134/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/134/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/134/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/134/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/134/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/134/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/134/BELFIUS.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: DDB Brussels</p><p>Director: Jan Boon</p><p>DOP: Stijn Coene &amp; Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014640',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/086/case_image.jpg',
            title: 'VOLKSWAGEN',
            subtitle: 'VOLKSPARKING',
            id: 86,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/086/PUB_volkswagen.mp4',
            director_slug: 'jan-boon-1',
            director_full_name: 'Jan Boon',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/086/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/086/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/086/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/086/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/086/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/086/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/086/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/086/VOLKSWAGEN.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/184821415',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/122/case_image.jpg',
            title: 'REBORN WAITING IN LINE',
            subtitle: '',
            id: 122,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/122/REBORN_WAITING_IN_LINE.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/122/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/122/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/122/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/122/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/122/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/122/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/122/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/122/REBORN%20WAITING%20IN%20LINE.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/013/award_image.jpg',
                title: 'CCB Awareness Brons',
              },
            ],
          },
          {
            description:
              '<p>Agency: Happiness</p><p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303021396',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/082/case_image.jpg',
            title: 'JIM MOBILE',
            subtitle: "LET'S GO HARD",
            id: 82,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/082/PUB_jimmobile.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/082/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/082/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/082/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/082/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/082/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/082/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/082/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/082/JIM%20MOBILE.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: Publicis</p><p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014506',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/090/case_image.jpg',
            title: 'CARREFOUR',
            subtitle: 'TASTY HOLIDAYS',
            id: 90,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/090/PUB_carrefour.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/090/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/090/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/090/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/090/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/090/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/090/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/090/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/090/CARREFOUR.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/349003709',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/138/case_image.jpg',
            title: 'Ouders van verongelukte kinderen',
            subtitle: 'Safety Jingle',
            id: 138,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/138/OVK_SAFTY_JINGLE.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/138/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/138/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/138/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/138/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/138/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/138/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/138/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/138/Ouders%20van%20verongelukte%20kinderen.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/012/award_image.jpg',
                title: 'CCB Promo&Activation Gold',
              },
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/010/award_image.jpg',
                title: 'CB PR SILVER',
              },
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/011/award_image.jpg',
                title: 'CCB RADIO SILVER',
              },
            ],
          },
          {
            description:
              '<p>Agency: Make Lemonade</p><p>Director: Dirk Domen</p><p>DOP: Piet Deyaert</p>',
            video_vimeo_url: 'https://vimeo.com/303014529',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/089/case_image.jpg',
            title: '11.11.11.',
            subtitle: 'FIGHT AGAINST INJUSTICE',
            id: 89,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/089/PUB_11.11.11.mp4',
            director_slug: 'dirk-domen-7',
            director_full_name: 'Dirk Domen',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/089/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/089/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/089/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/089/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/089/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/089/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/089/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/089/11.11.11..gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/349004989',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/139/case_image.jpg',
            title: 'Renault',
            subtitle: 'Real views',
            id: 139,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/139/RENAULT_REAL_VIEWS.mp4',
            director_slug: 'jan-boon-1',
            director_full_name: 'Jan Boon',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/139/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/139/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/139/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/139/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/139/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/139/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/139/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/139/Renault.gif',
            awards: [
              {
                logo_url:
                  'https://geronimo.be/system/uploads/award/logo/000/000/008/award_image.jpg',
                title: 'Eurobest Outdoor 2016',
              },
            ],
          },
          {
            description:
              '<p>Agency: Mortierbrigade</p><p>Director: Jan Boon</p><p>DOP: Patrick Otten</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303013988',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/105/case_image.jpg',
            title: 'KIA',
            subtitle: 'TICKETS TO RUSSIA',
            id: 105,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/105/PUB_kia.mp4',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/105/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/105/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/105/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/105/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/105/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/105/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/105/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
          {
            description:
              '<p>Agency: DDB Brussels</p><p>Director: Wim Geudens</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014191',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/099/case_image.jpg',
            title: 'BPOST',
            subtitle: 'THE EXPERIMENT',
            id: 99,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/099/PUB_bpost.mp4',
            director_slug: 'wim-geudens-9',
            director_full_name: 'Wim Geudens',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/099/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/099/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/099/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/099/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/099/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/099/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/099/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/099/BPOST.gif',
            awards: [],
          },
          {
            description:
              '<p>Agency: BBDO</p><p>Director: Michael Bombeeck</p><p>DOP: Piet Deyaert</p><p></p>',
            video_vimeo_url: 'https://vimeo.com/303014268',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/098/case_image.jpg',
            title: 'LIBELLE',
            subtitle: 'TASTY',
            id: 98,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/098/PUB_Libelle.mp4',
            director_slug: 'michael-bombeeckk-2',
            director_full_name: 'Michael Bombeeck',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/098/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/098/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/098/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/098/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/098/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/098/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/098/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/098/LIBELLE.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/309092740',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/112/case_image.jpg',
            title: 'Reel video 3 Pub',
            subtitle: '',
            id: 112,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/112/COMPRESSED_GERONIMO_REELCONTENT_FRONTPAGE_PUB_V1_1.mov',
            director_slug: null,
            director_full_name: null,
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/112/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/112/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/112/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/112/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/112/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/112/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/112/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url:
              'https://geronimo.be/system/uploads/case/preview_gif/000/000/112/Reel%20video%203%20Pub.gif',
            awards: [],
          },
          {
            description: '<p></p>',
            video_vimeo_url: 'https://vimeo.com/197892525',
            preview_image_url:
              'https://geronimo.be/system/uploads/case/preview_image/000/000/129/case_image.jpg',
            title: 'MEDIRECT ',
            subtitle: '',
            id: 129,
            preview_video_url:
              'https://geronimo.be/system/uploads/case/preview_video/000/000/129/MEDIRECT.mp4',
            director_slug: 'wim-geudens-9',
            director_full_name: 'Wim Geudens',
            category_type: 'pub',
            main_page_image_url:
              'https://geronimo.be/system/uploads/case/main_page_image/000/000/129/case_image.jpg',
            preview_image_versions_urls: {
              preview:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/129/pub_case_image.jpg',
              preview_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/129/pub_x2_case_image.jpg',
              mobile_1:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/129/mobile_1_case_image.jpg',
              mobile_1_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/129/mobile_1_x2_case_image.jpg',
              mobile_2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/129/mobile_2_case_image.jpg',
              mobile_2_x2:
                'https://geronimo.be/system/uploads/case/preview_image/000/000/129/mobile_2_x2_case_image.jpg',
            },
            preview_gif_url: null,
            awards: [],
          },
        ],
      },
    },
    fetching: true,
    collectionFetched: false,
  },
  reducers: {
    fetchInfo: state => {
      state.fetching = true;
    },
    fetchInfoSuccess(state, { payload }) {
      const { info } = payload;
      state.fetching = false;
      state.collectionFetched = true;
      state.collection = info.categories;
    },
    fetchInfoFailed(state) {
      state.fetching = false;
      state.collectionFetched = true;
    },
  },
});

export const actions = actionTypes(infoSlice.actions);

export default infoSlice.reducer;
