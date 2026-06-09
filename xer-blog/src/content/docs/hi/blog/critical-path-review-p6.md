---
title: 'Primavera P6 में Critical Path की समीक्षा कैसे करें'
description: 'Primavera P6 में critical path का क्या अर्थ है, critical filter को blindly क्यों नहीं स्वीकारना चाहिए, और forecast पर भरोसा करने के लिए path की समीक्षा कैसे करें।'
pubDate: 'Jul 22 2022'
heroImage:
  folder: blog
  fileName: blog-placeholder-2.jpg
---


Critical path एक schedule में dependent activities का सबसे लंबा sequence है। यह project की न्यूनतम संभव duration निर्धारित करता है और सीधे project की finish date define करता है।

व्यावहारिक रूप से, critical path वह tasks की chain है जिन्हें बिना final deadline को प्रभावित किए delay नहीं किया जा सकता। अगर कोई critical path activity slip हो और कुछ और न बदले, तो project completion date भी slip हो जाएगी।

इसीलिए critical path Primavera P6 schedule के सबसे महत्वपूर्ण outputs में से एक है। यह केवल एक filter, एक color, या एक report नहीं है। यह schedule की वह explanation है कि completion को क्या drive कर रहा है।

## Critical Path का क्या अर्थ है

एक schedule में कई activities होती हैं, लेकिन सभी activities का finish date पर समान प्रभाव नहीं होता। कुछ activities में float होता है। वे थोड़ा move कर सकती हैं इससे पहले कि वे अगली activity या project finish को प्रभावित करें। Critical activities में वह flexibility नहीं होती, या उनके पास schedule method और settings के आधार पर सबसे कम flexibility होती है।

Critical path वह minimum time दिखाता है जो project को पूरा करने के लिए चाहिए — current logic, durations, calendars, constraints, और status के आधार पर।

```mermaid
flowchart LR
    A["Project start"] --> B["Design release"]
    B --> C["Long-lead equipment की खरीद"]
    C --> D["Equipment install करें"]
    D --> E["System commission करें"]
    E --> F["Project completion"]
```

अगर यह controlling chain है, तो procurement में delay installation को delay कर सकती है। Installation में delay commissioning को delay कर सकती है। Commissioning में delay project completion को delay कर सकती है। Critical path team को वह connection देखने में मदद करता है।

## यह वह Chain है जिसे आप Delay नहीं कर सकते

Critical path केवल वह काम नहीं है जो महत्वपूर्ण लगता है। यह finish date define करने वाला dependent work का sequence है।

यह अंतर महत्वपूर्ण है। एक high-value activity critical नहीं हो सकती अगर उसमें float हो। एक visible client milestone critical नहीं हो सकती अगर कोई दूसरा path completion drive कर रहा हो। एक small technical activity critical हो सकती है अगर वह final handover तक जाने वाली एकमात्र chain में हो।

Project controls teams के लिए, यह critical path को एक decision tool बनाता है। यह जवाब देने में मदद करता है:

- Project finish को क्या drive कर रहा है?
- किन activities पर सबसे अधिक schedule attention चाहिए?
- कहाँ delay तुरंत completion को affect करेगी?
- कौन-से recovery actions finish date की रक्षा कर सकते हैं?
- क्या reported path समझ में आता है?

आखिरी सवाल वह है जिसे schedulers को कभी skip नहीं करना चाहिए।

## Critical Filter को Blindly स्वीकार न करें

Primavera P6 critical activities identify कर सकता है, लेकिन software project intent को नहीं समझता। यह दिए गए data के आधार पर calculate करता है: logic, calendars, constraints, durations, progress, और schedule options।

अगर data कमज़ोर है, तो critical path अजीब लग सकता है।

Activities या milestones critical filter में दिख सकते हैं भले ही वे वास्तव में project drive नहीं कर रहे। यह missing logic, hard constraints, stale dates, open ends, unusual calendars, negative float, incorrect status, या retained logic settings के कारण हो सकता है।

Scheduler को professional judgment का उपयोग करना होगा। Critical path को challenge किया जाना चाहिए। यह reasonable लगनी चाहिए। इसे एक ऐसी story बतानी चाहिए जिसे project team पहचाने।

अगर path कहती है कि final completion किसी administrative milestone से drive हो रहा है जिसका कोई real downstream work नहीं, तो challenge करें। अगर path किसी ऐसे milestone से शुरू होती है जो वास्तव में execution को control नहीं करता, तो challenge करें। अगर path बिना clear interface के unrelated WBS areas में jump करती है, तो challenge करें।

Critical path उतनी ही अच्छी है जितना उसके पीछे का schedule model।

## Baseline Schedules और Critical Path

एक schedule जिसे कभी update नहीं किया गया — जैसे पहला baseline — में critical path अक्सर project start milestone से शुरू होकर project completion milestone पर समाप्त होती है।

यह common है, लेकिन यह कोई पत्थर की लकीर नहीं है।

कुछ projects में critical path एक key intermediate milestone से शुरू होती है। उदाहरण के लिए, construction तब तक शुरू नहीं हो सकती जब तक owner कोई area handover न करे, permit release न हो, या design package approved status न पाए। ऐसे में, handover या release milestone controlling path की शुरुआत trigger कर सकता है।

यही विचार project के अंत के पास भी लागू होता है। Critical path final completion पर समाप्त हो सकती है, लेकिन यह किसी intermediate contractual milestone, handover stage, system turnover, या client access date को भी drive कर सकती है जो अभी अधिक restrictive है।

मुख्य बात यह नहीं है कि path सबसे traditional जगह से शुरू और खत्म हो। मुख्य बात यह है कि path logical, complete, और defensible हो।

## In-Progress Schedules

एक बार schedule in progress हो जाए, critical path का आकार बदल जाता है। Completed work को अब future completion drive नहीं करनी चाहिए। Path को current status boundary से शुरू होनी चाहिए।

Updated schedule में, critical path अक्सर किसी currently in-progress activity, शुरू होने के लिए तैयार not-started activity, या किसी valid milestone से शुरू होती है जो future work तक access को control करती है। यह किसी project interface या handover milestone से भी शुरू हो सकती है जब वह event genuinely अगले critical काम को drive कर रहा हो।

यहाँ Data Date matter करता है। Data Date actual performance को forecast work से अलग करता है। Data Date के बाद critical path को explain करना चाहिए कि remaining work completion तक कैसे पहुँचती है।

अगर path किसी activity से शुरू होती है जिसमें कोई driving logic नहीं, कोई unexplained Data Date start, या कोई questionable milestone है, तो reviewer को investigate करना चाहिए। Schedule एक calculated path दिखा रहा हो सकता है, लेकिन believable नहीं।

## Milestones के साथ सावधानी बरतें

Milestones उपयोगी हैं क्योंकि वे key points mark करती हैं: notice to proceed, area handover, design approval, mechanical completion, system turnover, substantial completion, और final completion।

लेकिन milestones critical path review को भी गुमराह कर सकती हैं।

एक milestone critical दिख सकती है क्योंकि उसमें constraint है। वह critical दिख सकती है क्योंकि उसमें कोई duration नहीं और वह date boundary पर बैठी है। वह critical दिख सकती है क्योंकि उसके आसपास logic missing है। इसका यह मतलब नहीं कि milestone वास्तव में controlling execution chain का हिस्सा है।

जब critical path किसी milestone से शुरू हो तो अतिरिक्त सावधानी बरतें। पूछें:

- क्या यह milestone एक real controlling event represent करती है?
- इस milestone को कौन-सी activity या external condition drive करती है?
- Milestone किस काम को release करती है?
- क्या milestone logic-driven की बजाय constrained है?
- अगर milestone logic को correct किया जाए तो क्या path अभी भी critical होगी?

अगर milestone काम को control नहीं करती, तो उसे critical path की story define नहीं करने देनी चाहिए।

## Retained Logic Story बदल सकती है

Retained logic एक Primavera P6 setting है जो out-of-sequence progress को handle करने के लिए उपयोग की जाती है। यह appropriate हो सकती है, लेकिन यह critical path को ऐसे तरीकों से affect कर सकती है जिन्हें reviewers को समझना ज़रूरी है।

जब retained logic उपयोग की जाती है, तो P6 predecessor logic को preserve कर सकता है भले ही successor work out of sequence में पहले ही शुरू हो चुकी हो। यह remaining work को इस तरह hold या sequence कर सकता है जो calculated critical path को बदल दे।

मुद्दा यह नहीं है कि retained logic हमेशा गलत है। मुद्दा यह है कि scheduler को समझना होगा कि क्या यह एक realistic forecast produce कर रही है।

अगर retained logic critical path को ऐसे relationships से गुज़ारती है जो अब यह reflect नहीं करते कि काम कैसे execute किया जा रहा है, तो team को status, logic, और schedule options review करने चाहिए। Path एक defensible remaining plan को reflect करनी चाहिए, न कि केवल एक mechanical calculation।

## Critical Path की समीक्षा कैसे करें

एक अच्छी critical path review में P6 output और scheduling judgment दोनों होने चाहिए।

Longest path या critical path report generate करके शुरू करें। फिर path की activity-by-activity समीक्षा करें। Predecessors, successors, relationship types, lags, constraints, calendars, actual dates, remaining duration, और total float देखें।

पूछें कि क्या path समझ में आती है:

- क्या path एक believable execution sequence follow करती है?
- क्या यह किसी valid current driver से शुरू होती है?
- क्या यह सही completion या control milestone पर finish होती है?
- क्या constraints path को force कर रहे हैं?
- क्या missing relationships real driver को hide कर रहे हैं?
- क्या retained logic path को misleading तरीके से affect कर रही है?
- क्या project team इसे controlling work के रूप में पहचानती है?

अगर जवाब नहीं है, तो schedule को review करने की ज़रूरत है इससे पहले कि critical path को confidently उपयोग किया जा सके।

## निष्कर्ष

Critical path dependent tasks का वह sequence है जो project finish date define करता है। यह project को complete करने के लिए न्यूनतम समय दिखाता है और उस काम को identify करता है जो deadline को affect किए बिना slip नहीं हो सकता।

लेकिन critical path को blindly accept नहीं करना चाहिए। P6 वही calculate करता है जो data उसे calculate करने के लिए कहता है। Scheduler को challenge करना होगा कि क्या result reasonable, logical, और real execution plan के साथ aligned है।

एक मज़बूत schedule में, critical path एक clear story बताती है। यह किसी valid current driver से शुरू होती है, real dependencies follow करती है, misleading constraints से बचती है, progress को सही तरीके से handle करती है, और सही completion milestone तक ले जाती है।

जब वह story समझ में आती है, तो critical path project control के सबसे powerful tools में से एक बन जाती है। जब नहीं आती, तो यह एक warning है कि forecast पर भरोसा करने से पहले schedule को और review की ज़रूरत है।
