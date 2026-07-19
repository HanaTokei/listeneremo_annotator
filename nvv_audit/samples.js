const NVV_AUDIT_DATA = {
  "metadata": {
    "title": "NVVSpeech Track1 Manual Audit",
    "generated_from": [
      "/root/blockdata/NVVSpeech/ourwork/research_track1/diagnostics/audit_conservative_zh/manual_batch_20260717/manual_audit_50.jsonl",
      "/root/blockdata/NVVSpeech/ourwork/research_track1/diagnostics/audit_by_dataset_20260718/manual_audit_by_dataset.jsonl"
    ],
    "sample_count": 125,
    "unique_audio_count": 109
  },
  "samples": [
    {
      "sourceGroup": "zh50",
      "seq": 1,
      "audit_id": "ZH-AUD-001",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_01_chuckle_hum_smack_00",
      "row_idx": 485,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_chuckle_hum_smack_00.wav",
      "audio": "audio/001_ZH-AUD-001_speaker_F_01_chuckle_hum_smack_00.wav",
      "label": "我在花园里修剪着花草 [hum]，想着昨天邻居那个傻乎乎的笑话 [laugh]，又闻到厨房飘来的烤蛋糕的香味 [lipsmack]，感觉这日子真是太美好了。",
      "prediction": "我在公园里修剪着花草，啦啦啦拉！想着昨天凝聚那个傻乎乎的笑话 [laugh] ，又闻到了厨房飘来的烤蛋糕的香味？ [lipsmack] 感觉这日子真是太美好了。C",
      "gt_tags": {
        "[hum]": 1,
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1,
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.17307692307692307,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 2,
      "audit_id": "ZH-AUD-002",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000012_007830",
      "row_idx": 646,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000012_007830.wav",
      "audio": "audio/002_ZH-AUD-002_000012_007830.wav",
      "label": "别名馒头精、馒头、冷馒头、s，膳司、[breath]微笑垃圾袋、交通指挥员、芫杉…[hum]…性别难」，这个应该不用说了吧。",
      "prediction": "别名馒头精馒透懒馒豆sensi善思 [breath] ，微笑垃圾袋交通指挥员圆山， [hum]性别难！这个应该不用说了吧。？",
      "gt_tags": {
        "[breath]": 1,
        "[hum]": 1
      },
      "pred_tags": {
        "[breath]": 1,
        "[hum]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1,
        "[hum]": 1
      },
      "fp_tags": {
        "[breath]": 1,
        "[hum]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.3,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 3,
      "audit_id": "ZH-AUD-003",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000007_002981",
      "row_idx": 516,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000007_002981.wav",
      "audio": "audio/003_ZH-AUD-003_000007_002981.wav",
      "label": "[hum]其实我觉得这套牌，这两个赛制都比较适合，因为它也是一个就是呃中速偏组合剂，或者说组合剂偏中速这么一个一个套牌类型，就是你可以…",
      "prediction": "其实我觉得这套牌，这两个赛制都比较适合？因为它也是一个就是 [breath] 对呃０中速偏组合技１或者说组和技偏中速这么一个一个套排类想４[breath] 就是你可以。 [breath] 。",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[breath]": 3
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[breath]": 3
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.22033898305084745,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 4,
      "audit_id": "ZH-AUD-004",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_00_hum_pant_smack_00",
      "row_idx": 565,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_hum_pant_smack_00.wav",
      "audio": "audio/004_ZH-AUD-004_speaker_F_00_hum_pant_smack_00.wav",
      "label": "他悄悄推开门，只听见黑暗深处传来一阵若有若无的 [hum] 哼唱，他猛地 [gasp] 倒吸一口凉气，那东西似乎察觉到了他，甚至发出了令人毛骨悚然的 [lipsmack] 声响。",
      "prediction": "他悄悄推开门，只听黑暗深处传来一阵若有若无的 [laugh] 哼唱它猛地 咳 倒吸一口凉气？那东西似乎察觉到了他！甚至发出了令人毛骨悚然的 弹声。１响。ﾁ响。",
      "gt_tags": {
        "[hum]": 1,
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "pred_tags": {
        "[laugh]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1,
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "fp_tags": {
        "[laugh]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.13333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 5,
      "audit_id": "ZH-AUD-005",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000005_004295",
      "row_idx": 246,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000005_004295.wav",
      "audio": "audio/005_ZH-AUD-005_000005_004295.wav",
      "label": "[hum]没劲了[laugh]",
      "prediction": "我，没气儿了！ [cough] 。",
      "gt_tags": {
        "[hum]": 1,
        "[laugh]": 1
      },
      "pred_tags": {
        "[cough]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1,
        "[laugh]": 1
      },
      "fp_tags": {
        "[cough]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.8,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 6,
      "audit_id": "ZH-AUD-006",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000011_000940",
      "row_idx": 86,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000011_000940.wav",
      "audio": "audio/006_ZH-AUD-006_000011_000940.wav",
      "label": "而且呢在去年上半年呀，涨幅非常大。[hum]所以说来了呢，这个年减法了呢，它要比安减法要好一些。",
      "prediction": "而且呢呢，在去年上半年呀？长夫非常大。 [breath] 所以说呢呢呢 ，这个年减法了呢ﾌ它要比安减发要好一些。” [breath] 。 话是说呢ﻌ这两个人呢也有可能",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.5897435897435898,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 7,
      "audit_id": "ZH-AUD-007",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000005_009031",
      "row_idx": 116,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000005_009031.wav",
      "audio": "audio/007_ZH-AUD-007_000005_009031.wav",
      "label": "他们家卖的[hum][laugh]，脱尖大貉子，干巴子肉，翻包的菜肉大饺子，角窝窝嘎了面给他问喝打捞走。什么说什么呢，什么惹他问和打捞走！他们家还卖酒的！是啊，人家什么都卖，行了。",
      "prediction": "他们家卖的 [laugh] ， [laugh] 拖肩大河了，干扒子肉！翻包着菜肉大饺子角窝窝尬了面着他问和打老嫂Ｑ什么说什么呢？什么惹他问打老骚Ｕ他们家还卖酒呢ａ是啊人家什么都卖行了。“ [cough] 行了。是啊人下什么都贸什行了。行了",
      "gt_tags": {
        "[hum]": 1,
        "[laugh]": 1
      },
      "pred_tags": {
        "[laugh]": 2,
        "[cough]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[cough]": 1
      },
      "matches": [
        {
          "tag": "[laugh]",
          "gt_pos": 6,
          "pred_pos": 5,
          "distance": 1
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.5072463768115942,
      "mntd": 0.014492753623188406
    },
    {
      "sourceGroup": "zh50",
      "seq": 8,
      "audit_id": "ZH-AUD-008",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000013_008314",
      "row_idx": 469,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000013_008314.wav",
      "audio": "audio/008_ZH-AUD-008_000013_008314.wav",
      "label": "[hum]SR宝贝抢到了第三名，[hum]",
      "prediction": "啊，sr宝贝抢到了第三名？ [gasp] 。啊ﾁ！ﾦ.",
      "gt_tags": {
        "[hum]": 2
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 2
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.4166666666666667,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 9,
      "audit_id": "ZH-AUD-009",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000002_005036",
      "row_idx": 80,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000002_005036.wav",
      "audio": "audio/009_ZH-AUD-009_000002_005036.wav",
      "label": "我想越来越多的人已经抱着是先结婚，反正以后也会离婚的想法。[hum]我自己是不行啊。[breath]再怎么说，我也是要对自己负责。",
      "prediction": "我想越来越多的人已经抱着是先结婚，反正以后也会离婚的想法。 [breath] 我自己是不行啊，怎么说？我也是要对自己负责。 话 再怎么说我也需要对自己付责了。 说得对。",
      "gt_tags": {
        "[hum]": 1,
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1,
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.40816326530612246,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 10,
      "audit_id": "ZH-AUD-010",
      "audit_priority": "P0",
      "audit_bucket": "A_hum_recall",
      "audit_reason": "FN [hum]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000010_000933",
      "row_idx": 40,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000010_000933.wav",
      "audio": "audio/010_ZH-AUD-010_000010_000933.wav",
      "label": "[hum]就这俩人还叫我守着，这个队哦，就二十几秒的事，我阻止你们过去。",
      "prediction": "，就这俩人儿还叫我守着！这个队友 [breath] ， 就二十几秒的声儿０我阻止你们过去。 [breath] 。",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.2857142857142857,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 11,
      "audit_id": "ZH-AUD-011",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_01_cough_sigh_sniffle_00",
      "row_idx": 170,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_cough_sigh_sniffle_00.wav",
      "audio": "audio/011_ZH-AUD-011_speaker_F_01_cough_sigh_sniffle_00.wav",
      "label": "我 [sniff] 觉得老板就是故意刁难我，他昨天 [cough] 又加了一堆新要求，这个项目 [sigh] 根本不可能完成。",
      "prediction": "我 [breath] ，觉得老板就是故意刁难我，他昨天 [throat clearing] 又加了一堆新要求？这个项目根本不可能完成。“” [breath] 。””这就很难了",
      "gt_tags": {
        "[sniff]": 1,
        "[cough]": 1,
        "[sigh]": 1
      },
      "pred_tags": {
        "[breath]": 2,
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1,
        "[cough]": 1,
        "[sigh]": 1
      },
      "fp_tags": {
        "[breath]": 2,
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.24324324324324326,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 12,
      "audit_id": "ZH-AUD-012",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_M_01_cough_sniffle_00",
      "row_idx": 624,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_01/speaker_M_01_cough_sniffle_00.wav",
      "audio": "audio/012_ZH-AUD-012_speaker_M_01_cough_sniffle_00.wav",
      "label": "我感觉 [cough] 头很痛，而且 [sniff] 鼻子也不通气。",
      "prediction": "我感觉 [sneeze] 头很痛，而且 [hiss] 鼻子也不通气。 [snore] 。",
      "gt_tags": {
        "[cough]": 1,
        "[sniff]": 1
      },
      "pred_tags": {
        "[sneeze]": 1,
        "[hiss]": 1,
        "[snore]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[cough]": 1,
        "[sniff]": 1
      },
      "fp_tags": {
        "[sneeze]": 1,
        "[hiss]": 1,
        "[snore]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.1875,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 13,
      "audit_id": "ZH-AUD-013",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_01_cough_sigh_sniffle_01",
      "row_idx": 252,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_cough_sigh_sniffle_01.wav",
      "audio": "audio/013_ZH-AUD-013_speaker_F_01_cough_sigh_sniffle_01.wav",
      "label": "他 [sigh] 看着窗外的雨，慢慢地说：“这个案子 [cough] 比我们想象的都复杂，线索在这里 [sniff] 就断了。”",
      "prediction": "他 [moan] ，看着窗外的雨，慢慢地说这个案子 [throat clearing] ？比我们想象的都复杂０线索在这里！就断了。",
      "gt_tags": {
        "[sigh]": 1,
        "[cough]": 1,
        "[sniff]": 1
      },
      "pred_tags": {
        "[moan]": 1,
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sigh]": 1,
        "[cough]": 1,
        "[sniff]": 1
      },
      "fp_tags": {
        "[moan]": 1,
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.11428571428571428,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 14,
      "audit_id": "ZH-AUD-014",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_00_ahem_sneeze_sniffle_00",
      "row_idx": 356,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_ahem_sneeze_sniffle_00.wav",
      "audio": "audio/014_ZH-AUD-014_speaker_F_00_ahem_sneeze_sniffle_00.wav",
      "label": "张教授 [throat clearing] 清了清嗓子，开始了他的讲座：“各位同学，今天我们讨论的主题是人工智能的伦理边界。这个领域的发展速度 [sneeze] 对不起，有点过敏——它的发展速度远超我们想象。我们必须思考 [sniff] 它未来的走向。”",
      "prediction": "张教授 [cough] ，清了清嗓子，开始了他的讲座。各位同学？今天我们讨论的主题是人工智能的轮理边界。这个领域的发展速度！ [sneeze] ！对不起１有点过敏。它的发展素度远超我们想象我们必须思考Ｊ [breath] 它未来的走向。。",
      "gt_tags": {
        "[throat clearing]": 1,
        "[sneeze]": 1,
        "[sniff]": 1
      },
      "pred_tags": {
        "[cough]": 1,
        "[sneeze]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[throat clearing]": 1,
        "[sniff]": 1
      },
      "fp_tags": {
        "[cough]": 1,
        "[breath]": 1
      },
      "matches": [
        {
          "tag": "[sneeze]",
          "gt_pos": 48,
          "pred_pos": 48,
          "distance": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.07407407407407407,
      "mntd": 0.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 15,
      "audit_id": "ZH-AUD-015",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_01_sniffle_00",
      "row_idx": 190,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_sniffle_00.wav",
      "audio": "audio/015_ZH-AUD-015_speaker_F_01_sniffle_00.wav",
      "label": "这家店的招牌菜 [sniff] 就这水平？我跟你说 ，还不如我楼下小摊做的好吃。",
      "prediction": "这家店的招牌菜， [breath] 就这水平？我跟你说还不如我楼下的小摊做得好吃。 [breath]",
      "gt_tags": {
        "[sniff]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.14285714285714285,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 16,
      "audit_id": "ZH-AUD-016",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_M_00_sniffle_01",
      "row_idx": 151,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_00/speaker_M_00_sniffle_01.wav",
      "audio": "audio/016_ZH-AUD-016_speaker_M_00_sniffle_01.wav",
      "label": "[sniff] 闻起来像是煤气泄漏了，快开窗！",
      "prediction": "， [hiss] ，闻起来像是煤气泄漏了！快开窗。 [snore] 。",
      "gt_tags": {
        "[sniff]": 1
      },
      "pred_tags": {
        "[hiss]": 1,
        "[snore]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1
      },
      "fp_tags": {
        "[hiss]": 1,
        "[snore]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.14285714285714285,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 17,
      "audit_id": "ZH-AUD-017",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_M_01_cough_sniffle_01",
      "row_idx": 687,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_01/speaker_M_01_cough_sniffle_01.wav",
      "audio": "audio/017_ZH-AUD-017_speaker_M_01_cough_sniffle_01.wav",
      "label": "那个，我 [cough] 觉得这个方案吧，嗯……还有一些细节需要完善，比如说这个预算……哎呀 ……不好意思，而且我好像有点感冒 [sniff]，思路不太清晰。",
      "prediction": "那个我 [cough] 觉得这个方案吧， [moan] ，还有一些细节需要完善！比如说这个预算哎哎哎不好意思１我好像有点感冒３ [hiss] ！思路不太清晰。？",
      "gt_tags": {
        "[cough]": 1,
        "[sniff]": 1
      },
      "pred_tags": {
        "[cough]": 1,
        "[moan]": 1,
        "[hiss]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1
      },
      "fp_tags": {
        "[moan]": 1,
        "[hiss]": 1
      },
      "matches": [
        {
          "tag": "[cough]",
          "gt_pos": 3,
          "pred_pos": 3,
          "distance": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.13725490196078433,
      "mntd": 0.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 18,
      "audit_id": "ZH-AUD-018",
      "audit_priority": "P0",
      "audit_bucket": "B_sniff_recall",
      "audit_reason": "FN [sniff]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_00_sniffle_00",
      "row_idx": 37,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_sniffle_00.wav",
      "audio": "audio/018_ZH-AUD-018_speaker_F_00_sniffle_00.wav",
      "label": "[sniff] 等一下，这汤里是不是糊了什么东西？",
      "prediction": "等一下，这汤里是不是糊了什么东西？ [breath] 这个汤有点糊涂了什么都不必了。如果",
      "gt_tags": {
        "[sniff]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.125,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 19,
      "audit_id": "ZH-AUD-019",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000014_003369",
      "row_idx": 695,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000014_003369.wav",
      "audio": "audio/019_ZH-AUD-019_000014_003369.wav",
      "label": "用缠着白布的手，抬起了夜莺绯的下巴。其实啊，[breath]要我给你解药哦，也很容易啊。毕竟大家解昧一场，我和你堂姐也喊了这么久啦，[breath]而且你也一口一个妹妹的叫诈，[breath]虽说很虚伪，却实也没有落下果。[breath]解药在哪里。",
      "prediction": "用缠着白布的手，抬起了夜卿妃的下巴。其实啊０要我给你解药也很容易啊。毕竟大家姐妹异常，你堂姐也喊得这么久了而且你也一口一个妹妹地叫着。虽说很虚伪却是也没有落下过。 [breath] 那解pl,解草在哪里？.",
      "gt_tags": {
        "[breath]": 4
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 4
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.26744186046511625,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 20,
      "audit_id": "ZH-AUD-020",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000008_000113",
      "row_idx": 49,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000008_000113.wav",
      "audio": "audio/020_ZH-AUD-020_000008_000113.wav",
      "label": "[breath][breath]本该是我看厌了的风景，可如今又让我不由得感叹，天空真是高原呢。",
      "prediction": "本该是我看厌了的风景，可如今又让我不由得感叹？天空真是高原呢。 [breath] 。！还是我看闻了。可今又然我不由地感",
      "gt_tags": {
        "[breath]": 2
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 2
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.6,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 21,
      "audit_id": "ZH-AUD-021",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000011_007886",
      "row_idx": 134,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000011_007886.wav",
      "audio": "audio/021_ZH-AUD-021_000011_007886.wav",
      "label": "一天，鸦妈妈领着丫宝宝们在池塘里玩耍。[breath]小可斗们瞧见了，[breath]它们也想自己的妈妈了，于是它们问鸦妈妈…",
      "prediction": "一天，鸭妈妈领着鸦宝宝们在池塘里玩耍。小蝌蚪们瞧见了代们也想自己的妈妈了。于是他们问鸡妈妈。 [breath]",
      "gt_tags": {
        "[breath]": 2
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 2
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.22727272727272727,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 22,
      "audit_id": "ZH-AUD-022",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000005_002475",
      "row_idx": 107,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000005_002475.wav",
      "audio": "audio/022_ZH-AUD-022_000005_002475.wav",
      "label": "晚庭正和几个女孩子手挽着手从路窄的大门里走出来，笑笑闹闹的，一派青春活泼。宛庭歪戴着背雷帽，短发烫了浅浅的弯，在看到那双黑溜溜的大眼睛时，她愣了好一会儿。都已经十八岁了，正是璀璨的年华，[breath]若不是那封信里夹了照片，宛庭几乎又认不出她。出落得这样漂亮，[breath]浑身都散发出光。",
      "prediction": "晚庭正和几个女孩子，手挽着手从露宅的大门里走出来 [breath] 小小闹闹得一派青春活泼。晚亭歪戴着贝雷帽？短发烫了浅浅的弯０在看到那双黑绿绿的大眼睛时她愣了好一会儿。都已经十八岁了正是璀璨的年华。 [breath] 若不是那封信里夹了照片cs１晚产几乎要认不出她。出落得这样漂亮３ [breath] 我全身",
      "gt_tags": {
        "[breath]": 2
      },
      "pred_tags": {
        "[breath]": 3
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [
        {
          "tag": "[breath]",
          "gt_pos": 84,
          "pred_pos": 86,
          "distance": 2
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.21666666666666667,
      "mntd": 0.016666666666666666
    },
    {
      "sourceGroup": "zh50",
      "seq": 23,
      "audit_id": "ZH-AUD-023",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000009_005382",
      "row_idx": 250,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000009_005382.wav",
      "audio": "audio/023_ZH-AUD-023_000009_005382.wav",
      "label": "其他人都是心有余悸，窃窃私语，[breath]容嬷嬷更是失魂落魄，嘴里不断念叨着阿弥陀佛。近使爷冷冷一笑，踏入房中。铜镜中的女人已经消失了。湖水般的镜面映照着少女精致白皙的面庞。此境与她心念相通。她方才不过暗暗凝神，凭借记忆中[breath]原主生母的画像。",
      "prediction": "其他人都是心有余悸，切切思语。容嬷嬁更是失魂落魄？嘴里不断念叨着阿弥陀佛。近时冷冷一笑１踏入房中童境中的女人已经消失了。湖水般的镜面０映照着少女精致白兮的面旁。此镜与她心念相通。 [breath] 她方才不过暗暗凝神３凭借记忆中原主生母的画像。 话 ！！言５。",
      "gt_tags": {
        "[breath]": 2
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 2
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.19230769230769232,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 24,
      "audit_id": "ZH-AUD-024",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000009_007975",
      "row_idx": 109,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000009_007975.wav",
      "audio": "audio/024_ZH-AUD-024_000009_007975.wav",
      "label": "想必就是这里！悟空啊，让八戒看好行李，八戒，你看好行李。大师兄，你小心点。自己拿起金箍棒啊，冲到洞门前，高声地叫道，[breath]妖怪，趁早送我师父出来，否则我掀了你的老窝。那大王听了孙悟空的声音，[breath]心里是又惊又怕…不料！",
      "prediction": "想必就是这里，悟空啊让八戒看好行李！八截你看好行力。 [breath] 大师兄１你小心点５自己拿起金箍棒啊冲到洞门前？高声地教导嘿妖怪趁早送我师父出来否则我掀了你的老窝。那大王听了孙悟通的声音发心里是又惊又怕Ｃ不料ab.",
      "gt_tags": {
        "[breath]": 2
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 2
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.14606741573033707,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 25,
      "audit_id": "ZH-AUD-025",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000013_008052",
      "row_idx": 453,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000013_008052.wav",
      "audio": "audio/025_ZH-AUD-025_000013_008052.wav",
      "label": "[breath]是这样吗？",
      "prediction": "是这样吗？ [breath] 。 [breath] 你看这男的脸色多得多啊",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 2.8,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 26,
      "audit_id": "ZH-AUD-026",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000007_007301",
      "row_idx": 603,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000007_007301.wav",
      "audio": "audio/026_ZH-AUD-026_000007_007301.wav",
      "label": "做的情人，还露有蕾，[breath]少喝一点一达…",
      "prediction": "做我的情人，我知道你想要少喝一点！ [laugh] 少喝点呢。 [breath] 少吃点３喝一打喝这么多？５８",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.6666666666666667,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 27,
      "audit_id": "ZH-AUD-027",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000007_001547",
      "row_idx": 376,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000007_001547.wav",
      "audio": "audio/027_ZH-AUD-027_000007_001547.wav",
      "label": "踩舟云淡，星河露起[breath]，画图难足。",
      "prediction": "彩洲云淡星核陆起，画图难阻。 [throat clearing] 太周云弹星和陆气化图南祖。 [breath]",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.5384615384615385,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 28,
      "audit_id": "ZH-AUD-028",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000015_002799",
      "row_idx": 383,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000015_002799.wav",
      "audio": "audio/028_ZH-AUD-028_000015_002799.wav",
      "label": "然后会不会突然一堆人净身，[breath]然后评、评审官会不会不公平？",
      "prediction": "然后会不会突然一队人晋升，然后评评审官会不会不公平？ [breath] 。 [breath]",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.24,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 29,
      "audit_id": "ZH-AUD-029",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000001_008844",
      "row_idx": 558,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000001_008844.wav",
      "audio": "audio/029_ZH-AUD-029_000001_008844.wav",
      "label": "而这个时候，琴母提着一壶凉茶和两个大碗就出来了。来，自个儿倒茶喝。好，大娘，我自己来。新风宝接过小茶壶和碗，然后给自己和琴建波各倒了一碗。琴母特别想听家里的事，于是便问了好多问题。你们爹娘还好吧？今年家里都还好吗？[breath]你们结婚了吗？",
      "prediction": "而这个时候，琴母提着一壶凉茶０喝两个大碗就出来了。来１自个儿倒茶喝。 [sigh] ，好？大娘，我自己来。秦风宝接过小茶壶和碗然后给自己和琴剑波各倒了一碗。琴姆特别想听家里的事于是便问了好多问题。你们爹娘还好吧Ａ静静Ｕ家里都还好吗！你们结婚了吗寧Ｘ [breath] 。Ｙ妈妈不让我们去吃",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[sigh]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[sigh]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.2376237623762376,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 30,
      "audit_id": "ZH-AUD-030",
      "audit_priority": "P0",
      "audit_bucket": "C_breath_recall_position",
      "audit_reason": "FN [breath]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000008_007797",
      "row_idx": 245,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000008_007797.wav",
      "audio": "audio/030_ZH-AUD-030_000008_007797.wav",
      "label": "这还有个井盖，你下去嘛！所有的房子都都坏了，太棒了太棒了！我变成鹿歌了，这就没了，一百块钱，就这样消失了[breath]这个城镇要多久才会恢复呢？我如何才能下去？这就是扯淡的井盖？这是赤水大教堂，这个教堂看起来好小啊？",
      "prediction": "这还有我井盖，可以下去嘛。 [breath] 所有的房子都 [breath] ，坏了！太棒了太棒啦!我变成路哥了ﾌ这就没了一百块钱这将消失了。 话 这个城镇要多久才会恢复呢？我如何才能下去这就是扯蛋的井干儿。这是厕所大教堂３这个教堧看起来好小啊。",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.2111111111111111,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 31,
      "audit_id": "ZH-AUD-031",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "Burp_data",
      "lang": "",
      "utt_id": "1380",
      "row_idx": 342,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1380.wav",
      "audio": "audio/031_ZH-AUD-031_1380.wav",
      "label": "都怪你，突然讲个冷笑话，你看给我冻得……[burp]……都打嗝了。",
      "prediction": "都怪你，突然讲个冷笑话，你看给我动的 [gasp] 都打嗝了。 [hiss] 。 [gasp], 都",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 2,
        "[hiss]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 2,
        "[hiss]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.2857142857142857,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 32,
      "audit_id": "ZH-AUD-032",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_M_01_chuckle_inhale_00",
      "row_idx": 418,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_01/speaker_M_01_chuckle_inhale_00.wav",
      "audio": "audio/032_ZH-AUD-032_speaker_M_01_chuckle_inhale_00.wav",
      "label": "关于我们下个月的旅行，我有个大胆的想法[laugh]，咱们不如直接租一辆房车环游吧！当然，这需要[breath]一份非常周密的计划和预算。",
      "prediction": "关于我们下个月的旅行，我有个大胆的想法 [laugh] ，咱们不如直接租一样防蛇环游吧。当然这需要 [hiss] 一份非常周密的计划和预算。 [breath] 。 [gasp] 。",
      "gt_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[hiss]": 1,
        "[breath]": 1,
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[hiss]": 1,
        "[breath]": 1,
        "[gasp]": 1
      },
      "matches": [
        {
          "tag": "[laugh]",
          "gt_pos": 18,
          "pred_pos": 18,
          "distance": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.11764705882352941,
      "mntd": 0.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 33,
      "audit_id": "ZH-AUD-033",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "Burp_data",
      "lang": "",
      "utt_id": "1014",
      "row_idx": 319,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1014.wav",
      "audio": "audio/033_ZH-AUD-033_1014.wav",
      "label": "不知道怎么回事，从刚才开始就[burp]……怎么办，一会儿还要上台发言呢。",
      "prediction": "不知道怎么回事，从刚才开始就 [gasp] ，怎么办？一会儿还要上台发言呢。！ [lipsmack]O 。哎呀我记",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.25925925925925924,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 34,
      "audit_id": "ZH-AUD-034",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "Burp_data",
      "lang": "",
      "utt_id": "416",
      "row_idx": 684,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/416.wav",
      "audio": "audio/034_ZH-AUD-034_416.wav",
      "label": "糟了，我一紧张就……[burp]完了，等会儿上台还怎么说词啊。",
      "prediction": "糟了，我一紧张就 [gasp] 完了等会儿上台还怎么说辞啊。 [lipsmack]",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.14285714285714285,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 35,
      "audit_id": "ZH-AUD-035",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000000_005906",
      "row_idx": 26,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000000_005906.wav",
      "audio": "audio/035_ZH-AUD-035_000000_005906.wav",
      "label": "哎呀，真是辛苦你了。[breath]没事，咱这次一起去给你报仇，让岁阳见识见识得罪错人的下场。",
      "prediction": "哎呀，真是辛苦你了。 [gasp] ，没事！咱这次一起去给你报仇让穗阳见识见证得罪错人的下场。 [sigh] 。而",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[gasp]": 1,
        "[sigh]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[gasp]": 1,
        "[sigh]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.14285714285714285,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 36,
      "audit_id": "ZH-AUD-036",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000014_008513",
      "row_idx": 629,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000014_008513.wav",
      "audio": "audio/036_ZH-AUD-036_000014_008513.wav",
      "label": "有什么关系吗[breath]？外出看诊的名医，也会对仙舟各地有什么好吃好玩的地方了如指掌啊，雇了我可绝不会让你吃亏的。",
      "prediction": "你有什么关系吗？外出看诊的名医也会对仙州各地有什么好吃好玩的地方了如指掌啊，顾了我可绝不会让你吃亏的。 [breath] 。 [gasp] 。",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 1,
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 1,
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.125,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 37,
      "audit_id": "ZH-AUD-037",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_00_hum_01",
      "row_idx": 156,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_hum_01.wav",
      "audio": "audio/037_ZH-AUD-037_speaker_F_00_hum_01.wav",
      "label": "等忙完这一阵，我就要给自己放个长假，[hum]。",
      "prediction": "等忙完这一阵，我就要给自己放个长假？ [laugh] 。 [gasp]",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.11764705882352941,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 38,
      "audit_id": "ZH-AUD-038",
      "audit_priority": "P1",
      "audit_bucket": "D_gasp_false_positive",
      "audit_reason": "FP [gasp]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000016_003485",
      "row_idx": 399,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000016_003485.wav",
      "audio": "audio/038_ZH-AUD-038_000016_003485.wav",
      "label": "[breath]姐姐，你看，怎么了，母亲最喜欢的虹彩蔷薇…开了。",
      "prediction": "，姐姐０你看怎么了？母亲最喜欢的红彩蔷薇！开了。 [gasp] 。开了３开了吗１好厉害呀。母亲也希望你能够",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.15,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 39,
      "audit_id": "ZH-AUD-039",
      "audit_priority": "P1",
      "audit_bucket": "E_throat_clearing_false_positive",
      "audit_reason": "FP [throat clearing]",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_M_00_cough_sigh_01",
      "row_idx": 615,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_00/speaker_M_00_cough_sigh_01.wav",
      "audio": "audio/039_ZH-AUD-039_speaker_M_00_cough_sigh_01.wav",
      "label": "你听我说，[sigh] 我其实……那天晚上 ……真不是故意的，我当时只是 [cough] 有点紧张。",
      "prediction": "你听我说 [moan] ，我其实那天晚上真不是故意的， 我当时只是 [throat clearing] 有点紧张。",
      "gt_tags": {
        "[sigh]": 1,
        "[cough]": 1
      },
      "pred_tags": {
        "[moan]": 1,
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sigh]": 1,
        "[cough]": 1
      },
      "fp_tags": {
        "[moan]": 1,
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.07142857142857142,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 40,
      "audit_id": "ZH-AUD-040",
      "audit_priority": "P1",
      "audit_bucket": "E_throat_clearing_false_positive",
      "audit_reason": "FP [throat clearing]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000017_003111",
      "row_idx": 220,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000017_003111.wav",
      "audio": "audio/040_ZH-AUD-040_000017_003111.wav",
      "label": "停，不过，那是不平啊，[laugh]，累了就不我加工就好。",
      "prediction": "听啊，不过啊ﾌ我自报表啊ￌ [laugh] 你叫胖多加官就好。 [throat clearing] 。”嗨！你叫白吗？家公叫",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.3333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 41,
      "audit_id": "ZH-AUD-041",
      "audit_priority": "P1",
      "audit_bucket": "E_throat_clearing_false_positive",
      "audit_reason": "FP [throat clearing]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000004_000271",
      "row_idx": 550,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000004_000271.wav",
      "audio": "audio/041_ZH-AUD-041_000004_000271.wav",
      "label": "[hum]找到了，你们看，是不是这个啊！你、你是天剑宗的！老大，不妙啊，他还带着信号弹…[hum]在向永远不识在山，这…溜得倒挺快啊！",
      "prediction": "找到了，你们看是不是这个呀？你你是天剑宗的。 [throat clearing] 老大不妙啊０他还带着信号弹。嗯！在向永远不示泰山这留子刀挺快。",
      "gt_tags": {
        "[hum]": 2
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 2
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.22916666666666666,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 42,
      "audit_id": "ZH-AUD-042",
      "audit_priority": "P1",
      "audit_bucket": "E_throat_clearing_false_positive",
      "audit_reason": "FP [throat clearing]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000010_001865",
      "row_idx": 63,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000010_001865.wav",
      "audio": "audio/042_ZH-AUD-042_000010_001865.wav",
      "label": "有可能啊[breath]，要不然，唐以墨说什么就来什么[breath]，除非他是乌鸦嘴，说谁谁倒霉？罗西吞咽了一口唾沫，惊悚道。",
      "prediction": "有可能啊，要不然０唐影墨说什么就来什么？除非她是乌鸦嘴说谁谁倒霉。罗西吞咽了一口唾沫惊悚的。 [throat clearing] 。",
      "gt_tags": {
        "[breath]": 2
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 2
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.16279069767441862,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 43,
      "audit_id": "ZH-AUD-043",
      "audit_priority": "P1",
      "audit_bucket": "E_throat_clearing_false_positive",
      "audit_reason": "FP [throat clearing]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000013_002061",
      "row_idx": 152,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000013_002061.wav",
      "audio": "audio/043_ZH-AUD-043_000013_002061.wav",
      "label": "[hum]有老子在的时候，老子自会收拾你。",
      "prediction": "啊，有老子在的时候？老子自会收拾你。 [throat clearing] 哎！有老在的时候 ，老",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.6666666666666666,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 44,
      "audit_id": "ZH-AUD-044",
      "audit_priority": "P1",
      "audit_bucket": "E_throat_clearing_false_positive",
      "audit_reason": "FP [throat clearing]",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000008_001333",
      "row_idx": 639,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000008_001333.wav",
      "audio": "audio/044_ZH-AUD-044_000008_001333.wav",
      "label": "不过听到炸弹爆炸的声音[hum]这…",
      "prediction": "我听到炸弹爆炸的声音， [throat clearing] 呃？这。",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.3076923076923077,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 45,
      "audit_id": "ZH-AUD-045",
      "audit_priority": "P1",
      "audit_bucket": "F_zero_match",
      "audit_reason": "zero_match",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_M_01_exhale_hiss_sigh_00",
      "row_idx": 434,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_01/speaker_M_01_exhale_hiss_sigh_00.wav",
      "audio": "audio/045_ZH-AUD-045_speaker_M_01_exhale_hiss_sigh_00.wav",
      "label": "老侦探缓缓 [breath] 吐出一口烟圈，心想这个凶手 [hiss] 真是个狡猾的家伙，只可惜线索到这里就断了 [sigh]，看来今晚又得通宵了。",
      "prediction": "老侦探缓缓 [hiss] 吐出一口烟圈，心想这个凶手 [snore] 真是个狡猾的家伙只可惜线索到这里就断了！ [moan] ，看来今晚又得通宵了。",
      "gt_tags": {
        "[breath]": 1,
        "[hiss]": 1,
        "[sigh]": 1
      },
      "pred_tags": {
        "[hiss]": 1,
        "[snore]": 1,
        "[moan]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1,
        "[hiss]": 1,
        "[sigh]": 1
      },
      "fp_tags": {
        "[hiss]": 1,
        "[snore]": 1,
        "[moan]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.0625,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 46,
      "audit_id": "ZH-AUD-046",
      "audit_priority": "P1",
      "audit_bucket": "F_zero_match",
      "audit_reason": "zero_match",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_00_exhale_pant_smack_01",
      "row_idx": 374,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_exhale_pant_smack_01.wav",
      "audio": "audio/046_ZH-AUD-046_speaker_F_00_exhale_pant_smack_01.wav",
      "label": "当他推开那扇吱呀作响的门 [gasp] 看到墙上那幅诡异的肖像画时，他下意识地后退了一步 [breath] 试图稳住心神，却发现画中人 [lipsmack] 嘴角的弧度似乎更大了。",
      "prediction": "当他推开那扇支压坐小的门， [cough] 看到墙上那幅诡异的肖像画时他下意识地后退了一步试图稳住心神却发现画中人嘶嘴角的弧度似乎更大了。 [snore] 。",
      "gt_tags": {
        "[gasp]": 1,
        "[breath]": 1,
        "[lipsmack]": 1
      },
      "pred_tags": {
        "[cough]": 1,
        "[snore]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1,
        "[breath]": 1,
        "[lipsmack]": 1
      },
      "fp_tags": {
        "[cough]": 1,
        "[snore]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.13333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 47,
      "audit_id": "ZH-AUD-047",
      "audit_priority": "P1",
      "audit_bucket": "F_zero_match",
      "audit_reason": "zero_match",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_01_laugh_pant_00",
      "row_idx": 298,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_laugh_pant_00.wav",
      "audio": "audio/047_ZH-AUD-047_speaker_F_01_laugh_pant_00.wav",
      "label": "我走到门口才发现 [gasp] 我的钱包和钥匙都忘在桌上了，你说我这记性 [laugh]，真是没救了。",
      "prediction": "我走到门口才发现 [cough] ，我的钱包和钥匙都忘在桌上了，你说我这记性！ [cry] 真是没救了。",
      "gt_tags": {
        "[gasp]": 1,
        "[laugh]": 1
      },
      "pred_tags": {
        "[cough]": 1,
        "[cry]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1,
        "[laugh]": 1
      },
      "fp_tags": {
        "[cough]": 1,
        "[cry]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.058823529411764705,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 48,
      "audit_id": "ZH-AUD-048",
      "audit_priority": "P1",
      "audit_bucket": "F_zero_match",
      "audit_reason": "zero_match",
      "dataset": "Emilia-NV",
      "lang": "",
      "utt_id": "000014_004356",
      "row_idx": 413,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000014_004356.wav",
      "audio": "audio/048_ZH-AUD-048_000014_004356.wav",
      "label": "夏号宝宝呀…[breath]…",
      "prediction": "下号宝保养！ [sniff] 上啊，说得 [sigh] 。Woo。",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[sniff]": 1,
        "[sigh]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[sniff]": 1,
        "[sigh]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 2.0,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 49,
      "audit_id": "ZH-AUD-049",
      "audit_priority": "P1",
      "audit_bucket": "F_zero_match",
      "audit_reason": "zero_match",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_00_pant_02",
      "row_idx": 473,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_pant_02.wav",
      "audio": "audio/049_ZH-AUD-049_speaker_F_00_pant_02.wav",
      "label": "你看这张旧照片，[gasp]，这不就是我失散多年的妹妹吗！",
      "prediction": "你看这张旧照片， [laugh] 这不就是我失散多年的妹妹吗？。 [breath] 。！这是我和你爸爸在一起的照片吧８这不就是我失",
      "gt_tags": {
        "[gasp]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.0952380952380953,
      "mntd": 1.0
    },
    {
      "sourceGroup": "zh50",
      "seq": 50,
      "audit_id": "ZH-AUD-050",
      "audit_priority": "P1",
      "audit_bucket": "F_zero_match",
      "audit_reason": "zero_match",
      "dataset": "MNV_17",
      "lang": "",
      "utt_id": "speaker_F_01_pant_00",
      "row_idx": 534,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_pant_00.wav",
      "audio": "audio/050_ZH-AUD-050_speaker_F_01_pant_00.wav",
      "label": "如果死者是溺水身亡，那他肺部为什么没有积水，[gasp]？",
      "prediction": "如果死者是逆水身亡，那他的肺部为什么没有积水？ [breath] 。 [breath] ，你记得吗Ｔ当年我们被一个怪物抓",
      "gt_tags": {
        "[gasp]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.9047619047619048,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 51,
      "audit_id": "DS-AUD-001",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "544",
      "row_idx": 62,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/544.wav",
      "audio": "audio/051_DS-AUD-001_544.wav",
      "label": "别催我，我一着急就……[burp]，这可怎么办啊。",
      "prediction": "别催我，我一着急就 [sneeze] 这可怎么办啊。 [yawn] 没事吧。",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[sneeze]": 1,
        "[yawn]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[sneeze]": 1,
        "[yawn]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[sneeze]",
          "gt_pos": 8,
          "pred_pos": 8,
          "dist": 0
        }
      ],
      "err": 0.3333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 52,
      "audit_id": "DS-AUD-002",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "en",
      "utt_id": "1438",
      "row_idx": 619,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1438.wav",
      "audio": "audio/052_DS-AUD-002_1438.wav",
      "label": "I've tried holding my breath and everything... [burp] they just won't go away.",
      "prediction": "我已经尝试把 breath and everything, [burp] they just won't go away.",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[burp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[burp]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[burp]",
          "gt_pos": 7,
          "pred_pos": 4,
          "dist": 3
        }
      ],
      "wrong_tag_near": [],
      "err": 0.3076923076923077,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 53,
      "audit_id": "DS-AUD-003",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "1380",
      "row_idx": 743,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1380.wav",
      "audio": "audio/031_ZH-AUD-031_1380.wav",
      "label": "都怪你，突然讲个冷笑话，你看给我冻得……[burp]……都打嗝了。",
      "prediction": "都怪你，突然讲个冷笑话，你看给我动的 [gasp] 都打嗝了。 [hiss] 。 [gasp], 都",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 2,
        "[hiss]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 2,
        "[hiss]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[gasp]",
          "gt_pos": 16,
          "pred_pos": 16,
          "dist": 0
        }
      ],
      "err": 0.2857142857142857,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 54,
      "audit_id": "DS-AUD-004",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "590",
      "row_idx": 1509,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/590.wav",
      "audio": "audio/053_DS-AUD-004_590.wav",
      "label": "完了完了，我一紧张就这样，[burp]……快，帮我找杯水喝。",
      "prediction": "完了完了，我一紧张就这样 [gasp] ，乖３帮我找杯水喝。！哈哈。",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[gasp]",
          "gt_pos": 11,
          "pred_pos": 11,
          "dist": 0
        }
      ],
      "err": 0.2631578947368421,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 55,
      "audit_id": "DS-AUD-005",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "1014",
      "row_idx": 696,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1014.wav",
      "audio": "audio/033_ZH-AUD-033_1014.wav",
      "label": "不知道怎么回事，从刚才开始就[burp]……怎么办，一会儿还要上台发言呢。",
      "prediction": "不知道怎么回事，从刚才开始就 [gasp] ，怎么办？一会儿还要上台发言呢。！ [lipsmack]O 。哎呀我记",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[gasp]",
          "gt_pos": 13,
          "pred_pos": 13,
          "dist": 0
        }
      ],
      "err": 0.25925925925925924,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 56,
      "audit_id": "DS-AUD-006",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "1430",
      "row_idx": 691,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1430.wav",
      "audio": "audio/054_DS-AUD-006_1430.wav",
      "label": "怎么又开始了……[burp]……这嗝打得我快说不出话了。",
      "prediction": "怎么又开始了， [gasp] 这格儿打得我快说不出话了。",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[gasp]",
          "gt_pos": 6,
          "pred_pos": 6,
          "dist": 0
        }
      ],
      "err": 0.16666666666666666,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 57,
      "audit_id": "DS-AUD-007",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "20",
      "row_idx": 413,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/20.wav",
      "audio": "audio/055_DS-AUD-007_20.wav",
      "label": "我、我一紧张就……[burp] 不好意思，我能先喝口水吗？",
      "prediction": "我我一紧张就 [burp] 不好意思，我能先喝口水吗？！ [hiss] ！不好意思。 [burp] 我能先给你倒点",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[burp]": 2,
        "[hiss]": 1
      },
      "tp_tags": {
        "[burp]": 1
      },
      "fn_tags": {},
      "fp_tags": {
        "[hiss]": 1,
        "[burp]": 1
      },
      "matches": [
        {
          "tag": "[burp]",
          "gt_pos": 6,
          "pred_pos": 6,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.7222222222222222,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 58,
      "audit_id": "DS-AUD-008",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "685",
      "row_idx": 590,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/685.wav",
      "audio": "audio/056_DS-AUD-008_685.wav",
      "label": "对不起，我一紧张就……[burp] 那个，我们刚才说到哪了？",
      "prediction": "对不起，我一紧张就 [burp] 那个？我们刚才说到哪儿了！Ｉ [lipsmack] 吗我还想吃蛋",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[burp]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {
        "[burp]": 1
      },
      "fn_tags": {},
      "fp_tags": {
        "[lipsmack]": 1
      },
      "matches": [
        {
          "tag": "[burp]",
          "gt_pos": 8,
          "pred_pos": 8,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.47368421052631576,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 59,
      "audit_id": "DS-AUD-009",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "en",
      "utt_id": "1175",
      "row_idx": 385,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1175.wav",
      "audio": "audio/057_DS-AUD-009_1175.wav",
      "label": "Man, I just chugged that whole bottle of soda. [burp] Oops, excuse me.",
      "prediction": "Man,我刚吃了 that whole bottle of soda. [burp] Oops, excuse me.",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[burp]": 1
      },
      "tp_tags": {
        "[burp]": 1
      },
      "fn_tags": {},
      "fp_tags": {},
      "matches": [
        {
          "tag": "[burp]",
          "gt_pos": 9,
          "pred_pos": 7,
          "dist": 2
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.23076923076923078,
      "mntd": 0.15384615384615385
    },
    {
      "sourceGroup": "dataset75",
      "seq": 60,
      "audit_id": "DS-AUD-010",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "428",
      "row_idx": 447,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/428.wav",
      "audio": "audio/058_DS-AUD-010_428.wav",
      "label": "别催我，我一着急……[burp]，你看，话都说不好了。",
      "prediction": "别催我，我一着急！ [hiss] 你看话都说不好了。 [lipsmack] 。哎",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[hiss]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[hiss]": 1,
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[hiss]",
          "gt_pos": 7,
          "pred_pos": 7,
          "dist": 0
        }
      ],
      "err": 0.1875,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 61,
      "audit_id": "DS-AUD-011",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "416",
      "row_idx": 1593,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/416.wav",
      "audio": "audio/034_ZH-AUD-034_416.wav",
      "label": "糟了，我一紧张就……[burp]完了，等会儿上台还怎么说词啊。",
      "prediction": "糟了，我一紧张就 [gasp] 完了等会儿上台还怎么说辞啊。 [lipsmack]",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 1,
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[gasp]",
          "gt_pos": 7,
          "pred_pos": 7,
          "dist": 0
        }
      ],
      "err": 0.14285714285714285,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 62,
      "audit_id": "DS-AUD-012",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "909",
      "row_idx": 283,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/909.wav",
      "audio": "audio/059_DS-AUD-012_909.wav",
      "label": "刚才那一下真是吓死我了，[burp] 这嗝怎么还打个没完了。",
      "prediction": "刚才那一下就是吓死我了， [sneeze] 这个怎么还打个没完了。",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[sneeze]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[sneeze]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[burp]",
          "pred_tag": "[sneeze]",
          "gt_pos": 11,
          "pred_pos": 11,
          "dist": 0
        }
      ],
      "err": 0.13636363636363635,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 63,
      "audit_id": "DS-AUD-013",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "101",
      "row_idx": 1564,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/101.wav",
      "audio": "audio/060_DS-AUD-013_101.wav",
      "label": "你别吓我，我这嗝……[burp] 好不容易快停了。",
      "prediction": "你别吓我， [gasp] 我这嗝好不容易快停了。",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[burp]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.13333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 64,
      "audit_id": "DS-AUD-014",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "zh",
      "utt_id": "125",
      "row_idx": 1621,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/125.wav",
      "audio": "audio/061_DS-AUD-014_125.wav",
      "label": "别吓我，我这嗝刚停下……[burp]……你看，又让你给吓出来了！",
      "prediction": "别吓我，我这嗝刚挺像 [burp] 你看又让你给吓出来了。",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[burp]": 1
      },
      "tp_tags": {
        "[burp]": 1
      },
      "fn_tags": {},
      "fp_tags": {},
      "matches": [
        {
          "tag": "[burp]",
          "gt_pos": 9,
          "pred_pos": 9,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.1,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 65,
      "audit_id": "DS-AUD-015",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Burp_data",
      "lang": "en",
      "utt_id": "1050",
      "row_idx": 1560,
      "path": "/root/blockdata/NVVSpeech/datasets/Burp_data/wav/1050.wav",
      "audio": "audio/062_DS-AUD-015_1050.wav",
      "label": "Ugh, I shouldn't have chugged that whole soda... [burp] excuse me.",
      "prediction": "Ugh,我 shouldn't have chugged that whole soda [burp] excuse me.",
      "gt_tags": {
        "[burp]": 1
      },
      "pred_tags": {
        "[burp]": 1
      },
      "tp_tags": {
        "[burp]": 1
      },
      "fn_tags": {},
      "fp_tags": {},
      "matches": [
        {
          "tag": "[burp]",
          "gt_pos": 8,
          "pred_pos": 8,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.09090909090909091,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 66,
      "audit_id": "DS-AUD-016",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000013_008052",
      "row_idx": 1034,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000013_008052.wav",
      "audio": "audio/025_ZH-AUD-025_000013_008052.wav",
      "label": "[breath]是这样吗？",
      "prediction": "是这样吗？ [breath] 。 [breath] 你看这男的脸色多得多啊",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[breath]",
          "gt_pos": 0,
          "pred_pos": 4,
          "dist": 4
        }
      ],
      "wrong_tag_near": [],
      "err": 2.8,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 67,
      "audit_id": "DS-AUD-017",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000014_004356",
      "row_idx": 923,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000014_004356.wav",
      "audio": "audio/048_ZH-AUD-048_000014_004356.wav",
      "label": "夏号宝宝呀…[breath]…",
      "prediction": "下号宝保养！ [sniff] 上啊，说得 [sigh] 。Woo。",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[sniff]": 1,
        "[sigh]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[sniff]": 1,
        "[sigh]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[breath]",
          "pred_tag": "[sniff]",
          "gt_pos": 5,
          "pred_pos": 5,
          "dist": 0
        }
      ],
      "err": 2.0,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 68,
      "audit_id": "DS-AUD-018",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000007_007301",
      "row_idx": 1417,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000007_007301.wav",
      "audio": "audio/026_ZH-AUD-026_000007_007301.wav",
      "label": "做的情人，还露有蕾，[breath]少喝一点一达…",
      "prediction": "做我的情人，我知道你想要少喝一点！ [laugh] 少喝点呢。 [breath] 少吃点３喝一打喝这么多？５８",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[breath]",
          "gt_pos": 8,
          "pred_pos": 20,
          "dist": 12
        }
      ],
      "wrong_tag_near": [],
      "err": 1.6666666666666667,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 69,
      "audit_id": "DS-AUD-019",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000007_001547",
      "row_idx": 816,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000007_001547.wav",
      "audio": "audio/027_ZH-AUD-027_000007_001547.wav",
      "label": "踩舟云淡，星河露起[breath]，画图难足。",
      "prediction": "彩洲云淡星核陆起，画图难阻。 [throat clearing] 太周云弹星和陆气化图南祖。 [breath]",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[breath]",
          "gt_pos": 8,
          "pred_pos": 25,
          "dist": 17
        }
      ],
      "wrong_tag_near": [],
      "err": 1.5384615384615385,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 70,
      "audit_id": "DS-AUD-020",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000017_003111",
      "row_idx": 499,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000017_003111.wav",
      "audio": "audio/040_ZH-AUD-040_000017_003111.wav",
      "label": "停，不过，那是不平啊，[laugh]，累了就不我加工就好。",
      "prediction": "听啊，不过啊ﾌ我自报表啊ￌ [laugh] 你叫胖多加官就好。 [throat clearing] 。”嗨！你叫白吗？家公叫",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[laugh]",
          "gt_pos": 8,
          "pred_pos": 12,
          "dist": 4
        }
      ],
      "wrong_tag_near": [],
      "err": 1.3333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 71,
      "audit_id": "DS-AUD-021",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000004_006281",
      "row_idx": 164,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000004_006281.wav",
      "audio": "audio/063_DS-AUD-021_000004_006281.wav",
      "label": "戴好了戴好了戴好了，[breath]非常开心，现在芙蓉啊，所以…",
      "prediction": "太好了，太好了 [breath] 非常开心！现在红龙啊？所以。。。承认了。对不起",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[breath]",
          "gt_pos": 9,
          "pred_pos": 6,
          "dist": 3
        }
      ],
      "wrong_tag_near": [],
      "err": 0.6190476190476191,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 72,
      "audit_id": "DS-AUD-022",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000008_005188",
      "row_idx": 1175,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000008_005188.wav",
      "audio": "audio/064_DS-AUD-022_000008_005188.wav",
      "label": "偶尔以此机会得到证实，确有一条路。日后，还请前辈多多照料蓬莱。倒游客气了，[breath]各方道通稳定才是大幸。这些年来…",
      "prediction": "偶尔一次机会得到证实，却有一条路。日后１还请前辈多多照料蓬莱？都由客气了cs同稳定才是大幸。这些年来。 [sigh] 你是不是有个朋友啊Ｈ你是吗你的朋友是谁呀你的想法是什么呢是他在家或是你在家中生孩子的可能性相反",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[sigh]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[sigh]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.2553191489361701,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 73,
      "audit_id": "DS-AUD-023",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000016_003485",
      "row_idx": 886,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000016_003485.wav",
      "audio": "audio/038_ZH-AUD-038_000016_003485.wav",
      "label": "[breath]姐姐，你看，怎么了，母亲最喜欢的虹彩蔷薇…开了。",
      "prediction": "，姐姐０你看怎么了？母亲最喜欢的红彩蔷薇！开了。 [gasp] 。开了３开了吗１好厉害呀。母亲也希望你能够",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.15,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 74,
      "audit_id": "DS-AUD-024",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000005_004295",
      "row_idx": 553,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000005_004295.wav",
      "audio": "audio/005_ZH-AUD-005_000005_004295.wav",
      "label": "[hum]没劲了[laugh]",
      "prediction": "我，没气儿了！ [cough] 。",
      "gt_tags": {
        "[hum]": 1,
        "[laugh]": 1
      },
      "pred_tags": {
        "[cough]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1,
        "[laugh]": 1
      },
      "fp_tags": {
        "[cough]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[laugh]",
          "pred_tag": "[cough]",
          "gt_pos": 4,
          "pred_pos": 5,
          "dist": 1
        }
      ],
      "err": 0.8,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 75,
      "audit_id": "DS-AUD-025",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "en",
      "utt_id": "000016_004024",
      "row_idx": 882,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000016_004024.wav",
      "audio": "audio/065_DS-AUD-025_000016_004024.wav",
      "label": "[cry]",
      "prediction": ". [cry]. [breath].",
      "gt_tags": {
        "[cry]": 1
      },
      "pred_tags": {
        "[cry]": 1,
        "[breath]": 1
      },
      "tp_tags": {
        "[cry]": 1
      },
      "fn_tags": {},
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [
        {
          "tag": "[cry]",
          "gt_pos": 0,
          "pred_pos": 0,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.0,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 76,
      "audit_id": "DS-AUD-026",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000013_002061",
      "row_idx": 362,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000013_002061.wav",
      "audio": "audio/043_ZH-AUD-043_000013_002061.wav",
      "label": "[hum]有老子在的时候，老子自会收拾你。",
      "prediction": "啊，有老子在的时候？老子自会收拾你。 [throat clearing] 哎！有老在的时候 ，老",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.6666666666666666,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 77,
      "audit_id": "DS-AUD-027",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000016_009325",
      "row_idx": 687,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000016_009325.wav",
      "audio": "audio/066_DS-AUD-027_000016_009325.wav",
      "label": "[hum]请问您还有什么问题吗？",
      "prediction": "，请问您还有什么问题吗？ [breath] 这次我看着",
      "gt_tags": {
        "[hum]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.6363636363636364,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 78,
      "audit_id": "DS-AUD-028",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000008_009781",
      "row_idx": 471,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000008_009781.wav",
      "audio": "audio/067_DS-AUD-028_000008_009781.wav",
      "label": "什么[breath]？",
      "prediction": "什么？ [breath] 如果我真的能找到门派遣人",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {
        "[breath]": 1
      },
      "fn_tags": {},
      "fp_tags": {},
      "matches": [
        {
          "tag": "[breath]",
          "gt_pos": 2,
          "pred_pos": 2,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 4.0,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 79,
      "audit_id": "DS-AUD-029",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000009_003899",
      "row_idx": 1622,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000009_003899.wav",
      "audio": "audio/068_DS-AUD-029_000009_003899.wav",
      "label": "可是你已经[breath]…",
      "prediction": "可是你接 [breath] ，是。！却没有更多的机",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {
        "[breath]": 1
      },
      "fn_tags": {},
      "fp_tags": {},
      "matches": [
        {
          "tag": "[breath]",
          "gt_pos": 5,
          "pred_pos": 4,
          "dist": 1
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.6666666666666667,
      "mntd": 0.16666666666666666
    },
    {
      "sourceGroup": "dataset75",
      "seq": 80,
      "audit_id": "DS-AUD-030",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "Emilia-NV",
      "lang": "zh",
      "utt_id": "000000_004413",
      "row_idx": 1225,
      "path": "/root/blockdata/NVVSpeech/datasets/Emilia-NV/extracted_wav/000000_004413.wav",
      "audio": "audio/069_DS-AUD-030_000000_004413.wav",
      "label": "[cry]，我要",
      "prediction": "我要嗯。 [yawn] 嗯。",
      "gt_tags": {
        "[cry]": 1
      },
      "pred_tags": {
        "[yawn]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[cry]": 1
      },
      "fp_tags": {
        "[yawn]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.3333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 81,
      "audit_id": "DS-AUD-031",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_00_sniffle_00",
      "row_idx": 81,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_sniffle_00.wav",
      "audio": "audio/018_ZH-AUD-018_speaker_F_00_sniffle_00.wav",
      "label": "[sniff] 等一下，这汤里是不是糊了什么东西？",
      "prediction": "等一下，这汤里是不是糊了什么东西？ [breath] 这个汤有点糊涂了什么都不必了。如果",
      "gt_tags": {
        "[sniff]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.125,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 82,
      "audit_id": "DS-AUD-032",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_00_pant_02",
      "row_idx": 1073,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_pant_02.wav",
      "audio": "audio/049_ZH-AUD-049_speaker_F_00_pant_02.wav",
      "label": "你看这张旧照片，[gasp]，这不就是我失散多年的妹妹吗！",
      "prediction": "你看这张旧照片， [laugh] 这不就是我失散多年的妹妹吗？。 [breath] 。！这是我和你爸爸在一起的照片吧８这不就是我失",
      "gt_tags": {
        "[gasp]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[gasp]",
          "pred_tag": "[laugh]",
          "gt_pos": 7,
          "pred_pos": 7,
          "dist": 0
        }
      ],
      "err": 1.0952380952380953,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 83,
      "audit_id": "DS-AUD-033",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_01_pant_00",
      "row_idx": 1223,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_pant_00.wav",
      "audio": "audio/050_ZH-AUD-050_speaker_F_01_pant_00.wav",
      "label": "如果死者是溺水身亡，那他肺部为什么没有积水，[gasp]？",
      "prediction": "如果死者是逆水身亡，那他的肺部为什么没有积水？ [breath] 。 [breath] ，你记得吗Ｔ当年我们被一个怪物抓",
      "gt_tags": {
        "[gasp]": 1
      },
      "pred_tags": {
        "[breath]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1
      },
      "fp_tags": {
        "[breath]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[gasp]",
          "pred_tag": "[breath]",
          "gt_pos": 20,
          "pred_pos": 21,
          "dist": 1
        }
      ],
      "err": 0.9047619047619048,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 84,
      "audit_id": "DS-AUD-034",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_00_exhale_00",
      "row_idx": 703,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_exhale_00.wav",
      "audio": "audio/070_DS-AUD-034_speaker_F_00_exhale_00.wav",
      "label": "[breath] 我只是想安安静静地看会儿书，怎么就这么难。",
      "prediction": "，我只是想安安静静地看会儿书！怎么就这么难？。 [breath] 。我还把书给查了一下读完后再去读",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[breath]",
          "gt_pos": 0,
          "pred_pos": 19,
          "dist": 19
        }
      ],
      "wrong_tag_near": [],
      "err": 0.85,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 85,
      "audit_id": "DS-AUD-035",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_M_00_moan_00",
      "row_idx": 1202,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_00/speaker_M_00_moan_00.wav",
      "audio": "audio/071_DS-AUD-035_speaker_M_00_moan_00.wav",
      "label": "[moan]，为什么每次轮到我洗碗，水槽里都堆得像山一样高？",
      "prediction": "，为什么每次轮到我洗碗？水槽里都堆得像山一样高！?１。 [moan] ，你记得吗Ｔ当年我们学校",
      "gt_tags": {
        "[moan]": 1
      },
      "pred_tags": {
        "[moan]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[moan]": 1
      },
      "fp_tags": {
        "[moan]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[moan]",
          "gt_pos": 0,
          "pred_pos": 22,
          "dist": 22
        }
      ],
      "wrong_tag_near": [],
      "err": 0.6363636363636364,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 86,
      "audit_id": "DS-AUD-036",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_01_chuckle_hum_smack_00",
      "row_idx": 1101,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_chuckle_hum_smack_00.wav",
      "audio": "audio/001_ZH-AUD-001_speaker_F_01_chuckle_hum_smack_00.wav",
      "label": "我在花园里修剪着花草 [hum]，想着昨天邻居那个傻乎乎的笑话 [laugh]，又闻到厨房飘来的烤蛋糕的香味 [lipsmack]，感觉这日子真是太美好了。",
      "prediction": "我在公园里修剪着花草，啦啦啦拉！想着昨天凝聚那个傻乎乎的笑话 [laugh] ，又闻到了厨房飘来的烤蛋糕的香味？ [lipsmack] 感觉这日子真是太美好了。C",
      "gt_tags": {
        "[hum]": 1,
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[hum]": 1,
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "fp_tags": {
        "[laugh]": 1,
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[laugh]",
          "gt_pos": 25,
          "pred_pos": 28,
          "dist": 3
        },
        {
          "tag": "[lipsmack]",
          "gt_pos": 40,
          "pred_pos": 44,
          "dist": 4
        }
      ],
      "wrong_tag_near": [],
      "err": 0.17307692307692307,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 87,
      "audit_id": "DS-AUD-037",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_M_00_inhale_00",
      "row_idx": 126,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_00/speaker_M_00_inhale_00.wav",
      "audio": "audio/072_DS-AUD-037_speaker_M_00_inhale_00.wav",
      "label": "看着窗外的暴风雪，[breath] 谢天谢地我们现在在室内。",
      "prediction": "看着窗外的暴风雪 [hiss] ，谢天谢地，我们现在在室内。 [snore] 这房间里有一个闪光灯塔啊？看到了",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[hiss]": 1,
        "[snore]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[hiss]": 1,
        "[snore]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[breath]",
          "pred_tag": "[hiss]",
          "gt_pos": 8,
          "pred_pos": 8,
          "dist": 0
        }
      ],
      "err": 0.85,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 88,
      "audit_id": "DS-AUD-038",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_00_pant_00",
      "row_idx": 454,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_pant_00.wav",
      "audio": "audio/073_DS-AUD-038_speaker_F_00_pant_00.wav",
      "label": "[gasp] 我们收到的求救信号，竟然是五十年前从地球发出的！",
      "prediction": "，我们收到的求救信号０竟然是五十年前从地球发出的！。 [breath] 。垂直而坚强的人不会被这救助",
      "gt_tags": {
        "[gasp]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.6956521739130435,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 89,
      "audit_id": "DS-AUD-039",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_01_inhale_01",
      "row_idx": 837,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_inhale_01.wav",
      "audio": "audio/074_DS-AUD-039_speaker_F_01_inhale_01.wav",
      "label": "[breath] 好了，我要开始做这个季度报告了，祝我好运。",
      "prediction": "好了，我要开始做这个季度报告了祝我好运。 [yawn] 。“””！谢谢大家８祝我也好",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[yawn]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[yawn]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.5789473684210527,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 90,
      "audit_id": "DS-AUD-040",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_01_cough_03",
      "row_idx": 1074,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_cough_03.wav",
      "audio": "audio/075_DS-AUD-040_speaker_F_01_cough_03.wav",
      "label": "嘿，哥们儿，[cough]，你上次答应我的事儿，办得怎么样了？",
      "prediction": "嘿，哥们儿？ [cough] 你上次答应我的事办得怎么样了！ [breath] 。“我记得当年我们跟他玩游戏的时候",
      "gt_tags": {
        "[cough]": 1
      },
      "pred_tags": {
        "[cough]": 1,
        "[breath]": 1
      },
      "tp_tags": {
        "[cough]": 1
      },
      "fn_tags": {},
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [
        {
          "tag": "[cough]",
          "gt_pos": 4,
          "pred_pos": 4,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.85,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 91,
      "audit_id": "DS-AUD-041",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_01_cough_sigh_sniffle_00",
      "row_idx": 391,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_cough_sigh_sniffle_00.wav",
      "audio": "audio/011_ZH-AUD-011_speaker_F_01_cough_sigh_sniffle_00.wav",
      "label": "我 [sniff] 觉得老板就是故意刁难我，他昨天 [cough] 又加了一堆新要求，这个项目 [sigh] 根本不可能完成。",
      "prediction": "我 [breath] ，觉得老板就是故意刁难我，他昨天 [throat clearing] 又加了一堆新要求？这个项目根本不可能完成。“” [breath] 。””这就很难了",
      "gt_tags": {
        "[sniff]": 1,
        "[cough]": 1,
        "[sigh]": 1
      },
      "pred_tags": {
        "[breath]": 2,
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1,
        "[cough]": 1,
        "[sigh]": 1
      },
      "fp_tags": {
        "[breath]": 2,
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[sniff]",
          "pred_tag": "[breath]",
          "gt_pos": 1,
          "pred_pos": 1,
          "dist": 0
        },
        {
          "gt_tag": "[cough]",
          "pred_tag": "[throat clearing]",
          "gt_pos": 16,
          "pred_pos": 16,
          "dist": 0
        }
      ],
      "err": 0.24324324324324326,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 92,
      "audit_id": "DS-AUD-042",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_01_hum_laugh_00",
      "row_idx": 1455,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_hum_laugh_00.wav",
      "audio": "audio/076_DS-AUD-042_speaker_F_01_hum_laugh_00.wav",
      "label": "我女儿昨天画了一幅画，画里的我 [laugh] 长着三头六臂，她说这样我才能一边 [hum] 做饭一边陪她玩。",
      "prediction": "我女儿昨天画了一幅画，画里的我？ [laugh] 长着三头六鼻！她说这样我才能一边啦啦啦做饭一边陪他玩。 [sniff] 。",
      "gt_tags": {
        "[laugh]": 1,
        "[hum]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[sniff]": 1
      },
      "tp_tags": {
        "[laugh]": 1
      },
      "fn_tags": {
        "[hum]": 1
      },
      "fp_tags": {
        "[sniff]": 1
      },
      "matches": [
        {
          "tag": "[laugh]",
          "gt_pos": 14,
          "pred_pos": 14,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.15789473684210525,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 93,
      "audit_id": "DS-AUD-043",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_00_cough_inhale_01",
      "row_idx": 186,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_00/speaker_F_00_cough_inhale_01.wav",
      "audio": "audio/077_DS-AUD-043_speaker_F_00_cough_inhale_01.wav",
      "label": "听着，这件事 [breath] 远比你想象的要复杂，而且我怀疑 [cough] 他从一开始就在撒谎。",
      "prediction": "听着？这件事 [breath] ，远比你想象的要复杂，而且我怀疑 [cough] 他从一开始就在撒谎。！他从小就有这个想法。说明什么呢Ｊ他从大学一年之后才发现到",
      "gt_tags": {
        "[breath]": 1,
        "[cough]": 1
      },
      "pred_tags": {
        "[breath]": 1,
        "[cough]": 1
      },
      "tp_tags": {
        "[breath]": 1,
        "[cough]": 1
      },
      "fn_tags": {},
      "fp_tags": {},
      "matches": [
        {
          "tag": "[breath]",
          "gt_pos": 5,
          "pred_pos": 5,
          "dist": 0
        },
        {
          "tag": "[cough]",
          "gt_pos": 20,
          "pred_pos": 20,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.9,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 94,
      "audit_id": "DS-AUD-044",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_F_01_sigh_00",
      "row_idx": 295,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_F_01/speaker_F_01_sigh_00.wav",
      "audio": "audio/078_DS-AUD-044_speaker_F_01_sigh_00.wav",
      "label": "[sigh]，今晚又要加班到深夜了，我的周末又泡汤了。",
      "prediction": "，今晚又要加班到深夜了？我的周末又跑趟了。 [cough] 。！哎今晚我又要上班",
      "gt_tags": {
        "[sigh]": 1
      },
      "pred_tags": {
        "[cough]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sigh]": 1
      },
      "fp_tags": {
        "[cough]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.631578947368421,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 95,
      "audit_id": "DS-AUD-045",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "MNV_17",
      "lang": "zh",
      "utt_id": "speaker_M_01_chuckle_01",
      "row_idx": 474,
      "path": "/root/blockdata/NVVSpeech/datasets/MNV_17/speaker_M_01/speaker_M_01_chuckle_01.wav",
      "audio": "audio/079_DS-AUD-045_speaker_M_01_chuckle_01.wav",
      "label": "小狗做错事后，就用那种无辜的眼神看着你，[laugh]，根本没法对它生气。",
      "prediction": "小狗做错事后，就用那种无辜的眼神看着你？ [laugh] ，根本没法对它生气。 [snore] 。这时候呢是要好好分享给大家看",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[snore]": 1
      },
      "tp_tags": {
        "[laugh]": 1
      },
      "fn_tags": {},
      "fp_tags": {
        "[snore]": 1
      },
      "matches": [
        {
          "tag": "[laugh]",
          "gt_pos": 18,
          "pred_pos": 18,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.5555555555555556,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 96,
      "audit_id": "DS-AUD-046",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0000_00356",
      "row_idx": 242,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0000_00356.wav",
      "audio": "audio/080_DS-AUD-046_nvtts_0000_00356.wav",
      "label": "What is so [laugh] unusual about this case?",
      "prediction": "What is so unusual about this case? [lipsmack] You don't have to go back and forth between these two cases",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1
      },
      "fp_tags": {
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.75,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 97,
      "audit_id": "DS-AUD-047",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0004_00441",
      "row_idx": 903,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0004_00441.wav",
      "audio": "audio/081_DS-AUD-047_nvtts_0004_00441.wav",
      "label": "It's like around like 7 30 in the morning [breath]️ um [breath]️ you can kind of see all of the little like [breath]️ seaside towns not towns the seaside [breath]️ attractions like the bagel sho",
      "prediction": "It's like around like 7.30 in the morning, um, you can kind of see all of the little like seaside towns, uh, not towns, the seaside attractions like the bagel shop. [hum]. You know, like the big bagel place. And then you have like the restaurant that we went to last night. It's called The Bagel Shop. And it has like a whole bunch of things going on there. Like you can see like the",
      "gt_tags": {
        "[breath]": 4
      },
      "pred_tags": {
        "[hum]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 4
      },
      "fp_tags": {
        "[hum]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[breath]",
          "pred_tag": "[hum]",
          "gt_pos": 32,
          "pred_pos": 32,
          "dist": 0
        }
      ],
      "err": 1.358974358974359,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 98,
      "audit_id": "DS-AUD-048",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0001_00077",
      "row_idx": 980,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0001_00077.wav",
      "audio": "audio/082_DS-AUD-048_nvtts_0001_00077.wav",
      "label": "[laugh] There's no choice is there [laugh]?",
      "prediction": "There's no choices there. [lipsmack] No choices there at all.",
      "gt_tags": {
        "[laugh]": 2
      },
      "pred_tags": {
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 2
      },
      "fp_tags": {
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[laugh]",
          "pred_tag": "[lipsmack]",
          "gt_pos": 6,
          "pred_pos": 4,
          "dist": 2
        }
      ],
      "err": 1.1428571428571428,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 99,
      "audit_id": "DS-AUD-049",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0005_00021",
      "row_idx": 775,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0005_00021.wav",
      "audio": "audio/083_DS-AUD-049_nvtts_0005_00021.wav",
      "label": "Oh, [laugh] that's a good one. [breath]️ I love when [laugh] Harry Styles is on this year, [breath]️ and he was like, [breath]️ he was so funny, and he did the music and the acting part. [laugh] [breath]️ It was so impressive. [breath]️",
      "prediction": "Oh, [laugh], that's a good one. Uh,我爱当年 Harry Styles上了这个剧会,他就这样说,他很有趣，他做了音乐和演奏的部分,那太厉害了。 [cry] 。",
      "gt_tags": {
        "[laugh]": 3,
        "[breath]": 5
      },
      "pred_tags": {
        "[laugh]": 1,
        "[cry]": 1
      },
      "tp_tags": {
        "[laugh]": 1
      },
      "fn_tags": {
        "[breath]": 5,
        "[laugh]": 2
      },
      "fp_tags": {
        "[cry]": 1
      },
      "matches": [
        {
          "tag": "[laugh]",
          "gt_pos": 1,
          "pred_pos": 1,
          "dist": 0
        }
      ],
      "same_tag_far": [
        {
          "tag": "[laugh]",
          "gt_pos": 11,
          "pred_pos": 1,
          "dist": 10
        },
        {
          "tag": "[laugh]",
          "gt_pos": 39,
          "pred_pos": 1,
          "dist": 38
        }
      ],
      "wrong_tag_near": [],
      "err": 0.8541666666666666,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 100,
      "audit_id": "DS-AUD-050",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0003_00007",
      "row_idx": 1415,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0003_00007.wav",
      "audio": "audio/084_DS-AUD-050_nvtts_0003_00007.wav",
      "label": "[laugh] [breath]️ Well, [breath]️ got a good batch for you today.",
      "prediction": "Well, got a good batch for you today. [laugh] Well then, bye bye.",
      "gt_tags": {
        "[laugh]": 1,
        "[breath]": 2
      },
      "pred_tags": {
        "[laugh]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1,
        "[breath]": 2
      },
      "fp_tags": {
        "[laugh]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[laugh]",
          "gt_pos": 0,
          "pred_pos": 8,
          "dist": 8
        }
      ],
      "wrong_tag_near": [],
      "err": 0.7692307692307693,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 101,
      "audit_id": "DS-AUD-051",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0003_00315",
      "row_idx": 4,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0003_00315.wav",
      "audio": "audio/085_DS-AUD-051_nvtts_0003_00315.wav",
      "label": "I think so. I guess what I'm saying is. [breath]️ Like. Do we need all 30 screws. Right now. Or can we just. [breath]️ You know. How.",
      "prediction": ", i think so? [lipsmack] i guess what i'm saying is, like, do we need all thirty screws right now, or can we just, you know, uh, have??.??? a new one?.? a new model?. [breath] A new model!?.!!!.! how?!?!.!?.!!!,,, how",
      "gt_tags": {
        "[breath]": 2
      },
      "pred_tags": {
        "[lipsmack]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 2
      },
      "fp_tags": {
        "[lipsmack]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[breath]",
          "gt_pos": 9,
          "pred_pos": 33,
          "dist": 24
        },
        {
          "tag": "[breath]",
          "gt_pos": 24,
          "pred_pos": 33,
          "dist": 9
        }
      ],
      "wrong_tag_near": [],
      "err": 0.6206896551724138,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 102,
      "audit_id": "DS-AUD-052",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0003_00431",
      "row_idx": 937,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0003_00431.wav",
      "audio": "audio/086_DS-AUD-052_nvtts_0003_00431.wav",
      "label": "It is what it and there's this wonderful kind of when it's working, [breath]️ this wonderful kind of alchemy between the audience and you. Well, you know because you're here.",
      "prediction": "It is what it and there's this wonderful kind of when it's working This wonderful kind alchemy between the audience and you well, you know because you're here with us for a very long time now. So thank you so much for being here with me today. Thank you. Thank goodness. Thank God. Thank god",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {},
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {},
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.967741935483871,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 103,
      "audit_id": "DS-AUD-053",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0002_00205",
      "row_idx": 764,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0002_00205.wav",
      "audio": "audio/087_DS-AUD-053_nvtts_0002_00205.wav",
      "label": "And then at the end, they show pictures of the real people who the characters are based on. And [breath]️  wow.",
      "prediction": "And then at the at the end they show pictures of the real people who their characters are based on and wow. [lipsmack] They really do look like real people. And so it's it's kind of interesting to see",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[lipsmack]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[lipsmack]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.9545454545454546,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 104,
      "audit_id": "DS-AUD-054",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0004_00494",
      "row_idx": 1194,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0004_00494.wav",
      "audio": "audio/088_DS-AUD-054_nvtts_0004_00494.wav",
      "label": "Trying to be nice. That wasn't John Cena [breath]️ trying to [breath]️ make amends. That wasn't John Cena trying to show me respect. [breath]️ Again, that was.",
      "prediction": "THAT WAS NOT JOHN CENA TRyING TO BE NICE OR TRANNG TO BE AMENZED OR SHOW ME RESPECT. AGAIN, THAT WAS JUST NOT THE WAY IT SHOULD HAVE BEEN.",
      "gt_tags": {
        "[breath]": 3
      },
      "pred_tags": {},
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 3
      },
      "fp_tags": {},
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.9333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 105,
      "audit_id": "DS-AUD-055",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0002_00030",
      "row_idx": 1401,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0002_00030.wav",
      "audio": "audio/089_DS-AUD-055_nvtts_0002_00030.wav",
      "label": "Mm hmm. And so. And so. And [breath]️ so. And so. And so. And so. And so. Mm 😖 hmm.",
      "prediction": "and [hum], and then [hum].",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[hum]": 2
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[hum]": 2
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.9047619047619048,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 106,
      "audit_id": "DS-AUD-056",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0002_00529",
      "row_idx": 1195,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0002_00529.wav",
      "audio": "audio/090_DS-AUD-056_nvtts_0002_00529.wav",
      "label": "I'm at [laugh] Wingdale Institute.",
      "prediction": "我们在 WINGDALE INSTITUTE。 [gasp]",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[laugh]",
          "pred_tag": "[gasp]",
          "gt_pos": 2,
          "pred_pos": 3,
          "dist": 1
        }
      ],
      "err": 0.8,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 107,
      "audit_id": "DS-AUD-057",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0002_00352",
      "row_idx": 265,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0002_00352.wav",
      "audio": "audio/091_DS-AUD-057_nvtts_0002_00352.wav",
      "label": "So I said by the time I get it, [breath]️ everybody wow. Oh wow.",
      "prediction": "So l said, By the time l get a feeling hey by the time wow oh wow [gasp].",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.6,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 108,
      "audit_id": "DS-AUD-058",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0004_00661",
      "row_idx": 1273,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0004_00661.wav",
      "audio": "audio/092_DS-AUD-058_nvtts_0004_00661.wav",
      "label": "And at the time I was rehearsing one of the plays we were doing, and he came and watched, and after he watched the rehearsal, he came up and said, Would you be interested in going out to California with a nightclub back? And I said, Sure, [laugh] I had no idea what it was or anything, but I knew that I was ready to move on. And it sounded like quite a .",
      "prediction": "WELL, IT WAS A GREAT OPPORTUNITY TO HAVE YOU BACK FOR A LITTLE WHISKERING AND TALKING ABOUT YOUR THOUGHTS ON THIS ISSUE. WELL, AS YOU WERE SAYING, MY THOUGHT WAS THAT THE NIGHT CLUB ACT WOULD BE BACK IN CALIFORNIA SO CAN WE GET THAT NIGHT Club Act back? AND HE SAID YES. AND AT THE TIME,",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {},
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1
      },
      "fp_tags": {},
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.9452054794520548,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 109,
      "audit_id": "DS-AUD-059",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0000_00343",
      "row_idx": 58,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0000_00343.wav",
      "audio": "audio/093_DS-AUD-059_nvtts_0000_00343.wav",
      "label": "Well, [laugh] people ask me that a lot because although I've tasted success, I've as well tasted a lot of failure. And I think for me, knowing [breath]️ that you have to just take joy in the small victories. And also how you leave something is how you enter it. So like how your attitude is.",
      "prediction": "HOW DO YOU ENTER A FIGHT AND HOW DOES IT FEEL TO LEAVE THE CASE ALONE AND HAVE YOUR OWN VICTORIES. WELL, THAT IS WHAT ASK ME A LOT BECAUSE ALTHOUGH TASTED SUCCESS AS WELL TASTING A LOT OF FAILURE AND FOR ME KNOWING THAT YOU KNOW YOU HAVE TO JUST TAKE JOIN THE SMALL VICTORIE.",
      "gt_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "pred_tags": {},
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1,
        "[breath]": 1
      },
      "fp_tags": {},
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.9298245614035088,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 110,
      "audit_id": "DS-AUD-060",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "NonverbalTTS",
      "lang": "en",
      "utt_id": "nvtts_0001_00651",
      "row_idx": 119,
      "path": "/root/blockdata/NVVSpeech/datasets/NonverbalTTS/extracted_wav/nvtts_0001_00651.wav",
      "audio": "audio/094_DS-AUD-060_nvtts_0001_00651.wav",
      "label": "[sneeze] In my opinion, yeah, I don't believe in the pressure points. I feel like that's a bunch of BS. I feel like I ca.",
      "prediction": "In my opinion, yeah.",
      "gt_tags": {
        "[sneeze]": 1
      },
      "pred_tags": {},
      "tp_tags": {},
      "fn_tags": {
        "[sneeze]": 1
      },
      "fp_tags": {},
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 0.84,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 111,
      "audit_id": "DS-AUD-061",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00000_00612",
      "row_idx": 1469,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00000_00612.wav",
      "audio": "audio/095_DS-AUD-061_nv38k_00000_00612.wav",
      "label": "我再也不会让你[throat clearing]离开我。",
      "prediction": "我再也不会让你离开我。 [gasp] 我，再也不會让你避开我ﾟ！别离。“我再也是感恩人８",
      "gt_tags": {
        "[throat clearing]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[throat clearing]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 2.090909090909091,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 112,
      "audit_id": "DS-AUD-062",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "en",
      "utt_id": "nv38k_00032_00681",
      "row_idx": 145,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00032_00681.wav",
      "audio": "audio/096_DS-AUD-062_nv38k_00032_00681.wav",
      "label": "[cough] Where is it?",
      "prediction": "Ach! Where is it? [throat clearing] It's over the top, Vic.",
      "gt_tags": {
        "[cough]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[cough]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.75,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 113,
      "audit_id": "DS-AUD-063",
      "audit_priority": "",
      "audit_bucket": "zero_match",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00039_00385",
      "row_idx": 1642,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00039_00385.wav",
      "audio": "audio/097_DS-AUD-063_nv38k_00039_00385.wav",
      "label": "水无痕，双眼通红，指着一群老者怒吼道，这样的天法之下，没有人能够活下来，龙辰也必死无疑了。说到后来水无痕的眼泪簌簌而下，[cough]这个话也不能这么说嘛啊，这只是一个意外嘛，一个老者干涸了一下道放屁。",
      "prediction": "水无痕双眼通红，指着一群老者怒吼道？这样的天法之下０没有人能够活下来１龙臣也必死无疑了。说到后来ﾌ水无恒的眼泪速速而下ﾟ [cough] 这个话也不能这么说嘛４啊Ｕ这只是一个意外嘛ﾝ一个老者干咳了一下道歷放屁。放屉。 [throat clearing] 。Long Chen said to me, if you want to die, you have to kill yourself. If you want your family back down, you need to kill yourselves back down. If not, you",
      "gt_tags": {
        "[cough]": 1
      },
      "pred_tags": {
        "[cough]": 1,
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[cough]": 1
      },
      "fp_tags": {
        "[cough]": 1,
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[cough]",
          "gt_pos": 53,
          "pred_pos": 57,
          "dist": 4
        }
      ],
      "wrong_tag_near": [],
      "err": 1.5647058823529412,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 114,
      "audit_id": "DS-AUD-064",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00018_00073",
      "row_idx": 832,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00018_00073.wav",
      "audio": "audio/098_DS-AUD-064_nv38k_00018_00073.wav",
      "label": "[cough]哎你没事吧，你你要干什么保护你。",
      "prediction": "你没事吧？ [cough] 你你要干什么！保护你。“，是。”在我背后找到自己的秘密,我会把他找",
      "gt_tags": {
        "[cough]": 1
      },
      "pred_tags": {
        "[cough]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[cough]": 1
      },
      "fp_tags": {
        "[cough]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[cough]",
          "gt_pos": 0,
          "pred_pos": 4,
          "dist": 4
        }
      ],
      "wrong_tag_near": [],
      "err": 1.3333333333333333,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 115,
      "audit_id": "DS-AUD-065",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00031_00027",
      "row_idx": 681,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00031_00027.wav",
      "audio": "audio/099_DS-AUD-065_nv38k_00031_00027.wav",
      "label": "[gasp]就算这簪子有毒也没关系，在我死之前。",
      "prediction": "就算这簪子有毒也没关系， [gasp] 在我死之前。！哈哈。就算这个簪有毒也是没关西？在我死前。",
      "gt_tags": {
        "[gasp]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[gasp]",
          "gt_pos": 0,
          "pred_pos": 11,
          "dist": 11
        }
      ],
      "wrong_tag_near": [],
      "err": 1.1764705882352942,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 116,
      "audit_id": "DS-AUD-066",
      "audit_priority": "",
      "audit_bucket": "same_tag_far",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00006_00552",
      "row_idx": 893,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00006_00552.wav",
      "audio": "audio/100_DS-AUD-066_nv38k_00006_00552.wav",
      "label": "[laugh]啊，讨厌弄得人家情绪失控。",
      "prediction": "，讨厌！弄得人家情绪失控。 [laugh] 。？虽然是爱情绢赠了他老婆",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[laugh]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1
      },
      "fp_tags": {
        "[laugh]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[laugh]",
          "gt_pos": 0,
          "pred_pos": 10,
          "dist": 10
        }
      ],
      "wrong_tag_near": [],
      "err": 1.1666666666666667,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 117,
      "audit_id": "DS-AUD-067",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00040_00795",
      "row_idx": 488,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00040_00795.wav",
      "audio": "audio/101_DS-AUD-067_nv38k_00040_00795.wav",
      "label": "[gasp]我他妈又没怎么动手，怎么搞到脸上都是血。",
      "prediction": "我他妈又没怎么动手，怎么搞到脸上都是血。 [throat clearing] 。 [gasp] 。我他妈也没怎么動手怎么找到褲子了？全部",
      "gt_tags": {
        "[gasp]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1,
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[gasp]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1,
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[gasp]",
          "gt_pos": 0,
          "pred_pos": 19,
          "dist": 19
        }
      ],
      "wrong_tag_near": [],
      "err": 1.105263157894737,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 118,
      "audit_id": "DS-AUD-068",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00004_00069",
      "row_idx": 266,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00004_00069.wav",
      "audio": "audio/102_DS-AUD-068_nv38k_00004_00069.wav",
      "label": "啊，[breath]<B>您您怎么</B>哭了？",
      "prediction": "啊，您您怎么哭了？ [gasp] 啊。您您怎么了！您您",
      "gt_tags": {
        "[breath]": 1
      },
      "pred_tags": {
        "[gasp]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[breath]": 1
      },
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.1,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 119,
      "audit_id": "DS-AUD-069",
      "audit_priority": "",
      "audit_bucket": "focus_fn",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00008_00841",
      "row_idx": 1342,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00008_00841.wav",
      "audio": "audio/103_DS-AUD-069_nv38k_00008_00841.wav",
      "label": "他也练过武艺，败过红福女，可是后来那原因种种[throat clearing]半路他不学了。",
      "prediction": "他也练过武艺，拜过红夫女？可是后来那原因准准半路他不学了。 [throat clearing] 。所以！他就去买了五衣。离了买的家人都去了１所以他",
      "gt_tags": {
        "[throat clearing]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[throat clearing]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[throat clearing]",
          "gt_pos": 20,
          "pred_pos": 26,
          "dist": 6
        }
      ],
      "wrong_tag_near": [],
      "err": 1.037037037037037,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 120,
      "audit_id": "DS-AUD-070",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00040_00258",
      "row_idx": 345,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00040_00258.wav",
      "audio": "audio/104_DS-AUD-070_nv38k_00040_00258.wav",
      "label": "[sigh]我觉得像在做梦，嗯，我感觉自己好像在做一场梦。",
      "prediction": "我觉得像在做梦，嗯？我感觉自己好像在做一场梦。 [breath] 。“博士！你好不好５我好不高兴和你一起见到这样的一个",
      "gt_tags": {
        "[sigh]": 1
      },
      "pred_tags": {
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sigh]": 1
      },
      "fp_tags": {
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.1904761904761905,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 121,
      "audit_id": "DS-AUD-071",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00016_00043",
      "row_idx": 1609,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00016_00043.wav",
      "audio": "audio/105_DS-AUD-071_nv38k_00016_00043.wav",
      "label": "我想下去看看他哦。[sigh]",
      "prediction": "我想下去看看他。 [gasp] 哦！。 [breath] 。，我现在在家里面找",
      "gt_tags": {
        "[sigh]": 1
      },
      "pred_tags": {
        "[gasp]": 1,
        "[breath]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sigh]": 1
      },
      "fp_tags": {
        "[gasp]": 1,
        "[breath]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [
        {
          "gt_tag": "[sigh]",
          "pred_tag": "[gasp]",
          "gt_pos": 8,
          "pred_pos": 7,
          "dist": 1
        }
      ],
      "err": 1.1111111111111112,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 122,
      "audit_id": "DS-AUD-072",
      "audit_priority": "",
      "audit_bucket": "focus_fp",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00026_00811",
      "row_idx": 374,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00026_00811.wav",
      "audio": "audio/106_DS-AUD-072_nv38k_00026_00811.wav",
      "label": "[laugh]嗯嗯嗯嗯，我呃再再再问你最后一遍。",
      "prediction": "我呃，再再再问你最后一遍。 [throat clearing] 。哇？再再在问你之后一变",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[throat clearing]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[laugh]": 1
      },
      "fp_tags": {
        "[throat clearing]": 1
      },
      "matches": [],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.0,
      "mntd": 1.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 123,
      "audit_id": "DS-AUD-073",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00011_00200",
      "row_idx": 1465,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00011_00200.wav",
      "audio": "audio/107_DS-AUD-073_nv38k_00011_00200.wav",
      "label": "恭喜你发财。[cough]",
      "prediction": "恭喜你发财。 [cough] 。！嗑了。ﷁ，谢谢。谢谢",
      "gt_tags": {
        "[cough]": 1
      },
      "pred_tags": {
        "[cough]": 1
      },
      "tp_tags": {
        "[cough]": 1
      },
      "fn_tags": {},
      "fp_tags": {},
      "matches": [
        {
          "tag": "[cough]",
          "gt_pos": 5,
          "pred_pos": 5,
          "dist": 0
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.1666666666666667,
      "mntd": 0.0
    },
    {
      "sourceGroup": "dataset75",
      "seq": 124,
      "audit_id": "DS-AUD-074",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00027_00420",
      "row_idx": 825,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00027_00420.wav",
      "audio": "audio/108_DS-AUD-074_nv38k_00027_00420.wav",
      "label": "什么时候回来的？我回来的时间不长，特来向大帅报道。[laugh]",
      "prediction": "什么时候回来？我回来的时间不长，彻来向大帅报到。 [laugh] 。 哈哈哈哈。 [gasp] 。！是呀我是来到大帵的报到的５所以",
      "gt_tags": {
        "[laugh]": 1
      },
      "pred_tags": {
        "[laugh]": 1,
        "[gasp]": 1
      },
      "tp_tags": {
        "[laugh]": 1
      },
      "fn_tags": {},
      "fp_tags": {
        "[gasp]": 1
      },
      "matches": [
        {
          "tag": "[laugh]",
          "gt_pos": 22,
          "pred_pos": 21,
          "dist": 1
        }
      ],
      "same_tag_far": [],
      "wrong_tag_near": [],
      "err": 1.0,
      "mntd": 0.043478260869565216
    },
    {
      "sourceGroup": "dataset75",
      "seq": 125,
      "audit_id": "DS-AUD-075",
      "audit_priority": "",
      "audit_bucket": "worst_err",
      "audit_reason": "",
      "dataset": "nonverbalspeech38k",
      "lang": "zh",
      "utt_id": "nv38k_00007_00557",
      "row_idx": 1550,
      "path": "/root/blockdata/NVVSpeech/datasets/nonverbalspeech38k/extracted_wav/nv38k_00007_00557.wav",
      "audio": "audio/109_DS-AUD-075_nv38k_00007_00557.wav",
      "label": "段祺瑞袁大头没安好心眼子，你们听听啊，我分析分析啊，对不对？他把刚才的想法当众一说大谋士袁金凯点了点头师长。[sniff]",
      "prediction": "赵七锐元的头没安好心眼子，你们听听我分析分枝啊sa对不对？他把刚才的想法当众一说０ [sniff] 大谋是袁金凯点了点头是啥！A。A。D。D.D。A.D. D.D.\"。Done.Done what?Done how?Dot how?C",
      "gt_tags": {
        "[sniff]": 1
      },
      "pred_tags": {
        "[sniff]": 1
      },
      "tp_tags": {},
      "fn_tags": {
        "[sniff]": 1
      },
      "fp_tags": {
        "[sniff]": 1
      },
      "matches": [],
      "same_tag_far": [
        {
          "tag": "[sniff]",
          "gt_pos": 49,
          "pred_pos": 39,
          "dist": 10
        }
      ],
      "wrong_tag_near": [],
      "err": 0.98,
      "mntd": 1.0
    }
  ]
};
