
const config = {
  fps: 30,
  flight_speed: 10,
  fire_enegy_need: 10,
  bullet_speed: 10,
  enemy_speed: 10,
  enemy_drop_speed: 3,
  debug_mode: true,
  animation_cooldown: 2,
  image_path: {
    gameArts: 'images/gameArts.png',
  },

  slice_info: {
    path: 'images/gameArts.png',
    elements: {
      bg: {
        sx: 0,
        sy: 0,
        sw: 320,
        sh: 568,
      },
      flight: {
        sx: 432,
        sy: 330,
        sw: 70,
        sh: 80,
      },
      enemy: [
        {
          default: {
            sx: 222,
            sy: 854,
            sw: 115,
            sh: 170,
          },
          die: [
            {
              sx: 320,
              sy: 170,
              sw: 110,
              sh: 170,
            },
            {
              sx: 320,
              sy: 510,
              sw: 110,
              sh: 170,
            },
            {
              sx: 320,
              sy: 340,
              sw: 110,
              sh: 170,
            },
            {
              sx: 320,
              sy: 0,
              sw: 110,
              sh: 170,
            },
          ],
        },
        {
          default: {
            sx: 83,
            sy: 656,
            sw: 37,
            sh: 30,
          },
          die: [
            {
              sx: 45,
              sy: 656,
              sw: 37,
              sh: 30,
            },
          ],
        },
        {
          default: {
            sx: 0,
            sy: 567,
            sw: 48,
            sh: 61,
          },
          die: [
            {
              sx: 430,
              sy: 540,
              sw: 48,
              sh: 61,
            },
            {
              sx: 430,
              sy: 601,
              sw: 48,
              sh: 61,
            },
            {
              sx: 430,
              sy: 479,
              sw: 48,
              sh: 61,
            },
          ],
        },
      ],
      bullet: {
        sx: 497,
        sy: 0,
        sw: 11,
        sh: 17,
      },
    }
  }
}
