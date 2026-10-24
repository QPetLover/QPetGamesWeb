game.createEmptyMovieClip("vo_mc",101);
vo_sound = new Sound(vo_mc);
bgMusic_sound = new Sound(game);
bgMusic_sound.attachSound("bgSound" + stageNum % 4);
bgMusic_sound.setVolume(50);
bgMusic_sound.start(0,999);
