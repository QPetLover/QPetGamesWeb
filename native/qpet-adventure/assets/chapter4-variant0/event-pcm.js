// Full original-rate PCM16; no SWF, ActionScript, or decoder runtime.
// This chapter explicitly references only its own event sound identities.
const assets={
"07102afd884c382232ef934fc5739acff092f300ffea0077e001cbae84980efb":{url:new URL("../audio-pcm/07102afd884c382232ef934fc5739acff092f300ffea0077e001cbae84980efb.wav",import.meta.url).href,
"rate":44100,"channels":1,"frames":31104,"wavSHA256":"e78726d4ead1aa35070824ffcbbc33f782a82940417eddc41d26e9d2ff94f36c","wavBytes":62252,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":1,"decodedFrames":31104,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"086f62a90e3c1f60a780ff43d39bb5b2ab33614e950cf891826ae6903e804af1":{url:new URL("../audio-pcm/086f62a90e3c1f60a780ff43d39bb5b2ab33614e950cf891826ae6903e804af1.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":77184,"wavSHA256":"c2d04fa86eb745185a3e6b5230d4bb200582141b38f7ba290953af7337b36d22","wavBytes":154412,profiles:{
"1661":{"requestedStartFrame":1661,"rate":11025,"channels":1,"decodedFrames":75523,"bodyOffsetFrame":1661,"prefixFrames":301
,prefixURL:new URL("../audio-pcm/086f62a90e3c1f60a780ff43d39bb5b2ab33614e950cf891826ae6903e804af1-1661.wav",import.meta.url).href,prefixWavSHA256:"406d224e3e99fc303d0bfeaac6b8f7a86c1803a184ef15b463d55cbf8178970e"
},
}},
"0ff9af26a14470ce1ea714d465f8077e15428276388bc8c4da59fce08863b7dc":{url:new URL("../audio-pcm/0ff9af26a14470ce1ea714d465f8077e15428276388bc8c4da59fce08863b7dc.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":14400,"wavSHA256":"8d2a7ebd0c5e275dffc438d2cd1a76165be4fd00eb16e92a45b37747cc1b1f69","wavBytes":28844,profiles:{
"1661":{"requestedStartFrame":1661,"rate":11025,"channels":1,"decodedFrames":12739,"bodyOffsetFrame":1661,"prefixFrames":342
,prefixURL:new URL("../audio-pcm/0ff9af26a14470ce1ea714d465f8077e15428276388bc8c4da59fce08863b7dc-1661.wav",import.meta.url).href,prefixWavSHA256:"623e1fa6afd6ea392051b462b121b02566d7a5beac4784b550c356e00b35b63a"
},
}},
"14d4f07716bd9e87fe5d889e2ba7d99cf8b0f58f6b3214c7724c9da716d97499":{url:new URL("../audio-pcm/14d4f07716bd9e87fe5d889e2ba7d99cf8b0f58f6b3214c7724c9da716d97499.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":97920,"wavSHA256":"4fd16f8e3a80fab29f42b9050d9377df9b0a6742d6254c6f1eec31dc18762704","wavBytes":195884,profiles:{
"0":{"requestedStartFrame":0,"rate":11025,"channels":1,"decodedFrames":97920,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"24421c2259ed7cfaf16a452fbbdc7199abe9d87f69d57f4258b378dae21e4804":{url:new URL("../audio-pcm/24421c2259ed7cfaf16a452fbbdc7199abe9d87f69d57f4258b378dae21e4804.wav",import.meta.url).href,
"rate":44100,"channels":1,"frames":31104,"wavSHA256":"f57428ff5a88375d3d438fb313bdb4a618d66aed5b52142749263da497437854","wavBytes":62252,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":1,"decodedFrames":31104,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"483dc8fc74a5e7fa3327000405b07e3d84c465d6fb9d0155144730038f567fb2":{url:new URL("../audio-pcm/483dc8fc74a5e7fa3327000405b07e3d84c465d6fb9d0155144730038f567fb2.wav",import.meta.url).href,
"rate":44100,"channels":2,"frames":35712,"wavSHA256":"d63cf95e725188a84d488a3a6bf4b1ae460814567b9d0af448d5aa0b5cf8673c","wavBytes":142892,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":2,"decodedFrames":35712,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"63a6ba01d12de89f85f0d33e46a1555f3dfcdbc8480d042683f327a6c2a18a4f":{url:new URL("../audio-pcm/63a6ba01d12de89f85f0d33e46a1555f3dfcdbc8480d042683f327a6c2a18a4f.wav",import.meta.url).href,
"rate":22050,"channels":1,"frames":111744,"wavSHA256":"432d976d4fa454bb14cdae94e9681789c2f02350fa27783a3119fd576aabced0","wavBytes":223532,profiles:{
"0":{"requestedStartFrame":0,"rate":22050,"channels":1,"decodedFrames":111744,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"676ebb60ddda729bdc88fb9b999b99868a5ad902f48dd86d06b0ae93f84a2abd":{url:new URL("../audio-pcm/676ebb60ddda729bdc88fb9b999b99868a5ad902f48dd86d06b0ae93f84a2abd.wav",import.meta.url).href,
"rate":22050,"channels":1,"frames":38592,"wavSHA256":"770ec7a6867af546a8cc9714aa1f22c76438357725b35d104cde9575ccf017d3","wavBytes":77228,profiles:{
"0":{"requestedStartFrame":0,"rate":22050,"channels":1,"decodedFrames":38592,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"6c99c289f3aa094c5b139055897ac30a59d8216b7793f536c670039c415b0e27":{url:new URL("../audio-pcm/6c99c289f3aa094c5b139055897ac30a59d8216b7793f536c670039c415b0e27.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":17856,"wavSHA256":"9ac87f3122fa3b8774cf8e07b6334151fc3cb5c25caf033958c3c20904583a8c","wavBytes":35756,profiles:{
"1633":{"requestedStartFrame":1633,"rate":11025,"channels":1,"decodedFrames":16223,"bodyOffsetFrame":1633,"prefixFrames":0
},
}},
"8055f87706e7c183305360163b8c5dc2c92e6a9cada4e6796ec5a50db36734b5":{url:new URL("../audio-pcm/8055f87706e7c183305360163b8c5dc2c92e6a9cada4e6796ec5a50db36734b5.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":18432,"wavSHA256":"d0547d47e39f48112a776e5b81ff2bc61dd0b6d279cac60db1cfbccb6400e261","wavBytes":36908,profiles:{
"1633":{"requestedStartFrame":1633,"rate":11025,"channels":1,"decodedFrames":16799,"bodyOffsetFrame":1633,"prefixFrames":0
},
}},
"85fd06bd82df29af75e6c40ec44b275d84a6a10b0999eb4e3778559ad1da7ca9":{url:new URL("../audio-pcm/85fd06bd82df29af75e6c40ec44b275d84a6a10b0999eb4e3778559ad1da7ca9.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":12096,"wavSHA256":"1680315de8181a4bf1caf032d94187a96890625aa0892b53a17ceded55dd130f","wavBytes":24236,profiles:{
"1661":{"requestedStartFrame":1661,"rate":11025,"channels":1,"decodedFrames":10435,"bodyOffsetFrame":1661,"prefixFrames":0
},
}},
"8b51334c517e5f103b050e18f2c7b55f259dae474103f75f86523c6739f26cf6":{url:new URL("../audio-pcm/8b51334c517e5f103b050e18f2c7b55f259dae474103f75f86523c6739f26cf6.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":8640,"wavSHA256":"4c6368732a0fa41c8d95ec8a14d927640006c4b49b3387218780736ac142a057","wavBytes":17324,profiles:{
"1633":{"requestedStartFrame":1633,"rate":11025,"channels":1,"decodedFrames":7007,"bodyOffsetFrame":1633,"prefixFrames":0
},
}},
"92601952ba907a0d3c1eecdb29e9de9acf62b3f353fbf535713d3a46cbaefed4":{url:new URL("../audio-pcm/92601952ba907a0d3c1eecdb29e9de9acf62b3f353fbf535713d3a46cbaefed4.wav",import.meta.url).href,
"rate":44100,"channels":2,"frames":55296,"wavSHA256":"c02c5a7a7857ba5154c14313f86656c40ed254b6754ed41eece0473be0200d27","wavBytes":221228,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":2,"decodedFrames":55296,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"95645d8b428a8ca78cd4c7dc72af8bef1774930824db572e063318d55c537d4a":{url:new URL("../audio-pcm/95645d8b428a8ca78cd4c7dc72af8bef1774930824db572e063318d55c537d4a.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":8064,"wavSHA256":"cdbd55828294c904ab74cc034fb453f9b71c14eca080494660fc9dc1da3b7035","wavBytes":16172,profiles:{
"1633":{"requestedStartFrame":1633,"rate":11025,"channels":1,"decodedFrames":6431,"bodyOffsetFrame":1633,"prefixFrames":0
},
}},
"96324a62e9c697b090b00455a2cf255084d3f0e72a2c2163d0fd92206ff6f79b":{url:new URL("../audio-pcm/96324a62e9c697b090b00455a2cf255084d3f0e72a2c2163d0fd92206ff6f79b.wav",import.meta.url).href,
"rate":44100,"channels":2,"frames":57600,"wavSHA256":"c7ef6a1de6d04a16048bbd6a535a4b1d78bf974f200870cd9d7ff37a93daa6a8","wavBytes":230444,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":2,"decodedFrames":57600,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"ba30655b09b836d913a2efdd6b27d98a0c5b3c01f8f2811c2215f8ecda0529c3":{url:new URL("../audio-pcm/ba30655b09b836d913a2efdd6b27d98a0c5b3c01f8f2811c2215f8ecda0529c3.wav",import.meta.url).href,
"rate":44100,"channels":2,"frames":39168,"wavSHA256":"dfc16865212d7b4bbcf193a10757cb31f5cc1d38fe3d11557b216f73b1d20d93","wavBytes":156716,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":2,"decodedFrames":39168,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"bd004a6809e2345bb9665b3a5968838ff90796cd61f77e5f64c1664e364530dc":{url:new URL("../audio-pcm/bd004a6809e2345bb9665b3a5968838ff90796cd61f77e5f64c1664e364530dc.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":6912,"wavSHA256":"dbd70df4b7d78fa23ba1d6a733211a92b2b1a216554cee242e6339825ef893e1","wavBytes":13868,profiles:{
"1661":{"requestedStartFrame":1661,"rate":11025,"channels":1,"decodedFrames":5251,"bodyOffsetFrame":1661,"prefixFrames":0
},
}},
"c3bd47633d157047c8e897d58626911df7451b6495b18541028a4f8f8565236d":{url:new URL("../audio-pcm/c3bd47633d157047c8e897d58626911df7451b6495b18541028a4f8f8565236d.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":8064,"wavSHA256":"27dce24713631a3ffe349c827184640bba818ddc77bf8b0c3234bbdb67139e62","wavBytes":16172,profiles:{
"1661":{"requestedStartFrame":1661,"rate":11025,"channels":1,"decodedFrames":6403,"bodyOffsetFrame":1661,"prefixFrames":0
},
}},
"c5d8cd3b824935dc7781344d6c2a400da3f1d7a387a2acab21def681ca671f68":{url:new URL("../audio-pcm/c5d8cd3b824935dc7781344d6c2a400da3f1d7a387a2acab21def681ca671f68.wav",import.meta.url).href,
"rate":44100,"channels":2,"frames":48384,"wavSHA256":"a2f7b358c2a5438217f370fec8e858ba135d0fe5b62467234d3b34faa269f5cc","wavBytes":193580,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":2,"decodedFrames":48384,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"e9c83bb2761bcde1462ae1d08101df20ffc1bab3a34f08a18fb11286e5f4867c":{url:new URL("../audio-pcm/e9c83bb2761bcde1462ae1d08101df20ffc1bab3a34f08a18fb11286e5f4867c.wav",import.meta.url).href,
"rate":44100,"channels":2,"frames":35712,"wavSHA256":"951733d38ac74c1d1828582c55f0cd2440e7db7d2b8c8758a2842403ab7d9c33","wavBytes":142892,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":2,"decodedFrames":35712,"bodyOffsetFrame":0,"prefixFrames":0
},
}},
"ead9706b5027d256ccaf672d2eeb419e35842584eaae6a08dfcad332bd53cd0a":{url:new URL("../audio-pcm/ead9706b5027d256ccaf672d2eeb419e35842584eaae6a08dfcad332bd53cd0a.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":114624,"wavSHA256":"87260fc032d131e6c7fcd6d30ef7521553aa528ff2a3a220c71493c1c9950fde","wavBytes":229292,profiles:{
"1633":{"requestedStartFrame":1633,"rate":11025,"channels":1,"decodedFrames":112991,"bodyOffsetFrame":1633,"prefixFrames":0
},
}},
"ec9162574933e0aff3fa03fea927ff979989e0b98b9f795fca7868847218e0d2":{url:new URL("../audio-pcm/ec9162574933e0aff3fa03fea927ff979989e0b98b9f795fca7868847218e0d2.wav",import.meta.url).href,
"rate":11025,"channels":1,"frames":10944,"wavSHA256":"41679afdfa45c6e9c5851706fd27468f979466e5c5a97446a531372a970f3aaf","wavBytes":21932,profiles:{
"1661":{"requestedStartFrame":1661,"rate":11025,"channels":1,"decodedFrames":9283,"bodyOffsetFrame":1661,"prefixFrames":0
},
}},
"edf4bc2238294fff6835fab668730a6c2be4d6e19ce52708d6cb8ea25bd646fb":{url:new URL("../audio-pcm/edf4bc2238294fff6835fab668730a6c2be4d6e19ce52708d6cb8ea25bd646fb.wav",import.meta.url).href,
"rate":44100,"channels":1,"frames":89856,"wavSHA256":"6a3106d0a91f7927fc163de1fd3d1e6479603c4cf00a01f943807dcada8bf5f0","wavBytes":179756,profiles:{
"0":{"requestedStartFrame":0,"rate":44100,"channels":1,"decodedFrames":89856,"bodyOffsetFrame":0,"prefixFrames":0
},
"12200":{"requestedStartFrame":12200,"rate":44100,"channels":1,"decodedFrames":77656,"bodyOffsetFrame":12200,"prefixFrames":0
},
}},
};
export const pcmData={package:"chapter4-variant0",sourceSWFSHA256:"fc4c489426b4fbafac0b500093a43491869fd30bbd341890b7cfdc6355602c85",assets,definitions:{"1":{"asset":"c3bd47633d157047c8e897d58626911df7451b6495b18541028a4f8f8565236d"},"2":{"asset":"676ebb60ddda729bdc88fb9b999b99868a5ad902f48dd86d06b0ae93f84a2abd"},"3":{"asset":"85fd06bd82df29af75e6c40ec44b275d84a6a10b0999eb4e3778559ad1da7ca9"},"4":{"asset":"0ff9af26a14470ce1ea714d465f8077e15428276388bc8c4da59fce08863b7dc"},"5":{"asset":"bd004a6809e2345bb9665b3a5968838ff90796cd61f77e5f64c1664e364530dc"},"6":{"asset":"95645d8b428a8ca78cd4c7dc72af8bef1774930824db572e063318d55c537d4a"},"7":{"asset":"8b51334c517e5f103b050e18f2c7b55f259dae474103f75f86523c6739f26cf6"},"8":{"asset":"ba30655b09b836d913a2efdd6b27d98a0c5b3c01f8f2811c2215f8ecda0529c3"},"9":{"asset":"483dc8fc74a5e7fa3327000405b07e3d84c465d6fb9d0155144730038f567fb2"},"10":{"asset":"c5d8cd3b824935dc7781344d6c2a400da3f1d7a387a2acab21def681ca671f68"},"11":{"asset":"96324a62e9c697b090b00455a2cf255084d3f0e72a2c2163d0fd92206ff6f79b"},"12":{"asset":"e9c83bb2761bcde1462ae1d08101df20ffc1bab3a34f08a18fb11286e5f4867c"},"13":{"asset":"92601952ba907a0d3c1eecdb29e9de9acf62b3f353fbf535713d3a46cbaefed4"},"14":{"asset":"ec9162574933e0aff3fa03fea927ff979989e0b98b9f795fca7868847218e0d2"},"525":{"asset":"086f62a90e3c1f60a780ff43d39bb5b2ab33614e950cf891826ae6903e804af1"},"958":{"asset":"8055f87706e7c183305360163b8c5dc2c92e6a9cada4e6796ec5a50db36734b5"},"961":{"asset":"6c99c289f3aa094c5b139055897ac30a59d8216b7793f536c670039c415b0e27"},"963":{"asset":"14d4f07716bd9e87fe5d889e2ba7d99cf8b0f58f6b3214c7724c9da716d97499"},"1533":{"asset":"63a6ba01d12de89f85f0d33e46a1555f3dfcdbc8480d042683f327a6c2a18a4f"},"2019":{"asset":"24421c2259ed7cfaf16a452fbbdc7199abe9d87f69d57f4258b378dae21e4804"},"2023":{"asset":"07102afd884c382232ef934fc5739acff092f300ffea0077e001cbae84980efb"},"2054":{"asset":"edf4bc2238294fff6835fab668730a6c2be4d6e19ce52708d6cb8ea25bd646fb"},"2314":{"asset":"ead9706b5027d256ccaf672d2eeb419e35842584eaae6a08dfcad332bd53cd0a"}}};
