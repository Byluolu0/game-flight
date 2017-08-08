
const globalConfig = {
  fps: 30,
  debug_mode: true,
  animation_cooldown: 2,
  enemy_internal: 10,
  image_path: {
    gameArts: 'images/gameArts.png',
  },
  bg: {
    base_image: 'gameArts',
    sx: 0,
    sy: 0,
    sw: 320,
    sh: 568,
  },
  flight: {
    speed: 10,
    fire_enegy_need: 3,
    base_image: 'gameArts',
    sx: 432,
    sy: 332,
    sw: 70,
    sh: 83,
    animations: {
      die: [
        {
          sx: 432,
          sy: 249,
          sw: 70,
          sh: 83,
        },
        {
          sx: 432,
          sy: 83,
          sw: 70,
          sh: 83,
        },
        {
          sx: 432,
          sy: 166,
          sw: 70,
          sh: 83,
        },
      ],
    },
  },
  bullet: {
    speed: 10,
    base_image: 'gameArts',
    sx: 497,
    sy: 0,
    sw: 11,
    sh: 17,
  },
  enemy: [
    {
      speed: 6,
      drop_speed: 3,
      hp: 6,
      base_image: 'gameArts',
      sx: 222,
      sy: 854,
      sw: 115,
      sh: 170,
      animations: {
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
    },
    {
      speed: 10,
      drop_speed: 4,
      hp: 1,
      base_image: 'gameArts',
      sx: 83,
      sy: 656,
      sw: 37,
      sh: 30,
      animations: {
        die: [
          {
            sx: 45,
            sy: 656,
            sw: 37,
            sh: 30,
          },
        ],
      },
    },
    {
      speed: 9,
      drop_speed: 4,
      hp: 3,
      base_image: 'gameArts',
      sx: 0,
      sy: 567,
      sw: 48,
      sh: 61,
      animations: {
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
    },
  ],
}
