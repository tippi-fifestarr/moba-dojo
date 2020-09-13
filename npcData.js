export default{
    "npc" : [
      {
        "name" : "En Pea Sea",
        "picture" : "img/npc1.jpg",
        "hometown" : "atlanta?",
        "role" : ["warrior", "tank"],
        "abilities" : {
          "s1" : {
            "text" : "runstun",
            "stun": 3,
            "speed" : '30%',
            "dmg" : "boosts next hit's dmg",
            "cd" : 4
  
          },
          "s2": {
            "text" : "spinny donks",
            "heal" : "1%",
            "dmg" : 100,
            "cd" : 5
          },
          "s3" : {
            "text" : "shmash face",
            "heal" : 0,
            "dmg" : 1000,
            "cd" : 8
          }
        },
        "stats" : {
            "hp" : 3800,
            "hpgrow" : 180,
            "admg" : 150,
            "agrow" : 18.2,
            "def" : 150,
            "defgrow" : 18.2,
            "mood" : "normal/water",
            "mtendency" : "defensive (runaway!), bloodthirst (atttaaackkkk!), lonely"

          }
        },
         
        
      ]
}