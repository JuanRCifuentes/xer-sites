---
title: 'Data Date पर बिना Driving Logic के शुरू होने वाली Activities'
description: 'Data Date पर बिना driving logic के शुरू होने वाली activities Primavera P6 schedule को क्यों कमज़ोर करती हैं, उनके कारण क्या हैं, और metric को step by step कैसे fix करें।'
pubDate: 'Jun 8 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-1.jpg
---

## अनुमानित पढ़ने / बोलने का समय

5-10 मिनट

## लक्षित लंबाई

750-1,500 शब्द

## पाठक वर्ग

यह ब्लॉग planning engineers, project controls engineers, schedulers, project managers, और PMO reviewers के लिए है जो Primavera P6 का उपयोग schedule quality का आकलन करने के लिए करते हैं। यह विशेष रूप से उन teams के लिए उपयोगी है जो schedule updates review करती हैं और यह confirm करना चाहती हैं कि near-term activities CPM logic से ठीक से driven हैं।

## Opening Hook

सबसे common schedule review surprises में से एक है यह देखना कि activities का एक समूह Data Date पर शुरू हो रहा है। पहली नज़र में, ऐसा लग सकता है कि project team कई काम तुरंत शुरू करने के लिए तैयार है। लेकिन जब उन activities में उन्हें drive करने वाला कोई logic नहीं होता, तो schedule एक कमज़ोर story बता रही हो सकती है: activities इसलिए शुरू हो रही हैं क्योंकि update boundary move हो गई, न कि इसलिए कि काम genuinely ready है।

## परिचय

Primavera P6 में Data Date, past और forecast के बीच dividing line है। इससे पहले की हर चीज़ actual progress या completed work represent करनी चाहिए। इसके बाद की हर चीज़ इस point से आगे के plan को represent करनी चाहिए।

क्योंकि Data Date इतना महत्वपूर्ण है, इस पर शुरू होने वाली activities पर ध्यान देना ज़रूरी है। कुछ valid हो सकती हैं — जैसे formal notice, access release, या project kickoff के बाद authorized कोई activity। लेकिन जब कोई open या not-started activity Data Date पर driving predecessor logic के बिना शुरू होती है, तो schedule reviewer को रुकना चाहिए।

यह metric उन activities को देखती है जो Data Date पर शुरू होने के लिए scheduled हैं बिना valid logic के जो उस start को drive करे। Target है zero unresolved activities। किसी भी exceptions को document और approve करें।

## इस Parameter का क्या अर्थ है

Data Date पर बिना driving logic के शुरू होने वाली activity वह activity है जिसकी forecast start date current update boundary पर बैठी है बिना किसी clear predecessor path के जो explain करे कि वह शुरू क्यों हो सकती है।

CPM scheduling में, activities normally relationships के माध्यम से connected होनी चाहिए। एक activity finish होती है, दूसरी शुरू होती है। एक area उपलब्ध हो जाता है, फिर crew mobilize होती है। एक design package approve होता है, फिर procurement proceed कर सकती है। ये relationships schedule को meaningful dates, float, और critical path behavior calculate करने देती हैं।

जब logic missing होती है, Primavera P6 फिर भी activity को schedule में कहीं place कर सकता है। अगर activity open है और predecessors द्वारा properly driven नहीं है, तो schedule calculate होने के बाद यह Data Date पर या उसके पास दिख सकती है। इसका ज़रूरी नहीं मतलब है कि activity ready है। इसका मतलब केवल यह हो सकता है कि schedule में कोई better logic नहीं है जो बताए कि activity कब शुरू होनी चाहिए।

इस metric के लिए high count suggest करता है कि schedule में open starts, weak predecessor logic, artificial constraints, या update problems हैं। कम count — ideally zero — suggest करता है कि near-term काम schedule network से better connected है।

## यह विषय क्यों Matter करता है

यह metric इसलिए matter करती है क्योंकि Data Date वह जगह है जहाँ project reporting सबसे sensitive होती है। Updated schedule practical सवालों के जवाब देती है:

- आगे कौन-सा काम शुरू होना चाहिए?
- कौन-सी activities ready हैं?
- Critical या longest path को क्या drive कर रहा है?
- Near-term risks कहाँ हैं?
- क्या forecast dates reliable हैं?

अगर activities बिना driving logic के Data Date पर शुरू हो रही हैं, तो जवाब misleading हो सकते हैं। Schedule काम को available दिखा सकती है जब predecessor काम, approvals, materials, access, या interfaces वास्तव में complete नहीं हुए।

यह float values को distort कर सकता है, critical path को कमज़ोर कर सकता है, और lookahead planning को कम reliable बना सकता है।

PMO governance के लिए, यह एक quality signal भी है। DCMA-style assessments और common schedule health checks complete logic, valid sequencing, और defensible dates पर ज़ोर देते हैं।

## Poor Results के सामान्य कारण

इस metric के poor perform करने के सबसे common कारण practical हैं और generally fixable हैं।

- Missing predecessor relationships
- ऐसे predecessors जो exist तो हैं लेकिन activity को actually drive नहीं करते
- Real logic की जगह start constraints या expected dates का उपयोग
- Incomplete progress updates या missing actual starts
- Early schedule development से छोड़ी गई open-start activities
- Out-of-sequence progress या update settings जिनकी समीक्षा नहीं की गई
- External interface activities जिन्हें exceptions के रूप में document नहीं किया गया

मुख्य बात यह है कि यह केवल formatting issue नहीं है। समस्या यह है कि schedule शायद explain न कर सके कि date valid क्यों है।

## Result कैसे Improve करें

### 1. एक P6 Layout बनाएं जो समस्या को Clearly दिखाए

Primavera P6 में एक layout या report बनाकर शुरू करें जो open या not-started activities को filter करे जिनकी start date Data Date के बराबर हो। ऐसे columns add करें जो reviewer को कारण समझने में मदद करें: Activity ID, Activity Name, WBS, Start, Finish, Status, Total Float, Calendar, Primary Constraint, Predecessors, और Successors।

### 2. Missing या Weak Logic को Correct करें

हर activity के लिए, पूछें कि इस काम के शुरू होने से पहले क्या होना चाहिए। जवाब एक physical predecessor, एक engineering deliverable, एक procurement event, एक permit, एक handover, या एक access condition हो सकता है।

ऐसी logic add करें जो real dependency represent करे, न कि केवल metric pass करने के लिए add किया गया relationship। Finish-to-start relationship कई मामलों में सही हो सकता है, लेकिन overlapping काम के लिए start-to-start या finish-to-finish relationships अधिक realistic हो सकते हैं। वह relationship type उपयोग करें जो reflect करे कि काम actually कैसे manage किया जाएगा।

Logic add करने के बाद, schedule recalculate करें और check करें कि start अब genuinely predecessor completion से driven है।

### 3. Constraints, Status, और Exceptions की समीक्षा करें

कुछ activities constraints के कारण Data Date पर शुरू होती हैं। Constraints automatically गलत नहीं हैं, लेकिन इन्हें सावधानी से उपयोग करना चाहिए। अगर start constraint normal logic की जगह ले रहा है, तो यह true sequence को hide कर सकता है और float को distort कर सकता है।

Status की भी समीक्षा करें। अगर activity actually शुरू हो चुकी है, तो actual start और remaining duration correctly enter करें। अगर शुरू नहीं हुई, तो उसे ready नहीं दिखने दें जब तक logic उस forecast को support न करे।

अंत में, exceptions document करें। एक project start milestone या externally authorized activity को normal predecessor की ज़रूरत नहीं हो सकती। लेकिन अगर वह metric result में रहती है, तो कारण scheduler, project controls lead, और PMO reviewer को स्पष्ट होना चाहिए।

## उदाहरण Scenario

मान लीजिए एक construction schedule है जिसकी Data Date 01 June है। Monthly update के बाद, scheduler को 18 not-started activities मिलती हैं जिनकी start dates 01 June हैं और कोई driving predecessor logic नहीं है।

पहले, team मान लेती है कि ये ready-to-start activities हैं। लेकिन review से पता चलता है कि ऐसा नहीं है। कई installation activities में material delivery के predecessor links missing हैं। कुछ testing activities installation completion से linked नहीं हैं। दो activities में पुराने start constraints हैं। एक activity एक legitimate interface milestone है जिसे exception के रूप में document किया जाना चाहिए।

Scheduler missing relationships add करता है, unnecessary constraints remove करता है, exception note update करता है, और schedule recalculate करता है। Result 18 activities से गिरकर एक documented exception पर आ जाता है। Lookahead अब project team को much clearer view देता है कि actually क्या शुरू होने के लिए तैयार है।

## Recommended Improvement Schedule

एक simple one-week improvement cycle उपयोग करें:

- Day 1: Current result review करें और Data Date confirm करें।
- Days 2-3: Missing predecessor logic correct करें और unjustified constraints remove करें।
- Days 4-5: Schedule recalculate करें और float, longest path, और milestone impact review करें।
- Day 6: Discipline leads या package owners के साथ remaining issues resolve करें।
- Day 7: Metric reassess करें और approved exceptions document करें।

## Mistakes से बचें

Metric count reduce करने के लिए random predecessor relationships add करने से बचें। Logic real work sequence represent करनी चाहिए।

जब relationship sequence को better explain करे तो constraints को shortcut के रूप में उपयोग करने से बचें। Constraints valid हो सकते हैं, लेकिन वे CPM logic का substitute नहीं बनने चाहिए।

Activities को इसलिए ignore करने से बचें क्योंकि वे critical path पर नहीं हैं। Near-term non-critical काम भी coordination, lookahead planning, और resource readiness को affect करता है।

Exceptions को casually treat करने से बचें। अगर किसी activity को intentionally driving logic के बिना Data Date पर शुरू होने की अनुमति दी जाती है, तो कारण document करें।

## Key Takeaways

- Data Date पर बिना driving logic के शुरू होने वाली activities missing sequencing या weak update discipline signal कर सकती हैं।
- Target result है zero unresolved activities।
- Valid exceptions exist हो सकते हैं, लेकिन उन्हें documented और approved होना चाहिए।
- Best correction है real CPM logic — artificial relationships या unnecessary constraints नहीं।
- Changes करने के बाद float, longest path, और near-term activities recalculate और review करें।

## निष्कर्ष

Data Date पर बिना driving logic के शुरू होने वाली activities पर careful review ज़रूरी है क्योंकि वे उस point पर बैठी हैं जहाँ actual performance समाप्त होती है और forecast शुरू होती है।

जब यह metric controlled होती है, तो schedule पर भरोसा करना आसान हो जाता है। Near-term काम better connected होता है, critical path clearer होती है, और reporting मज़बूत होती है।

Result improve करने के लिए disciplined schedule review की ज़रूरत है: activities identify करें, समझें कि वे क्यों शुरू हो रही हैं, valid logic add करें, unnecessary constraints remove करें, status correct करें, और exceptions document करें।

## Call to Action

अपना latest Primavera P6 schedule update review करें और open या not-started activities को filter करें जो Data Date पर शुरू हो रही हैं। हर एक के लिए, एक simple सवाल पूछें: इस start को क्या drive कर रहा है? अगर जवाब clear नहीं है, तो schedule issue होने से पहले logic correct करें या exception document करें।

## Related Metrics

- [Activities Starting on the Data Date with No Driving Logic — Overview](/hi/metrics/data-date-no-driving-logic-overview/)
