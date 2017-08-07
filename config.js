
const config = {
  fps: 30,
  flight_speed: 10,
  fire_enegy_need: 10,
  bullet_speed: 10,
  enemy_speed: 10,
  debug_mode: true,
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
          sx: 222,
          sy: 854,
          sw: 115,
          sh: 170,
        },
        {
          sx: 83,
          sy: 656,
          sw: 37,
          sh: 30,
        },
        {
          sx: 0,
          sy: 567,
          sw: 48,
          sh: 61,
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
