---
title: 'Data Date पर बिना Driving Logic के शुरू होने वाली Activities — Overview'
sidebar:
  label: 'Data Date पर No Driving Logic — Overview'
description: 'Schedule quality metric: Primavera P6 Data Date पर बिना driving predecessor logic के शुरू होने वाली activities — यह क्या measure करती है, इसका zero target, और यह क्यों matter करती है।'
pubDate: 'Junio 8, 2026'
heroImage:
  folder: blog
  fileName: blog-placeholder-3.jpg
---
# Overview

## विवरण

यह metric उन open या not-started activities को identify करती है जो Primavera P6 Data Date पर शुरू होने के लिए scheduled हैं लेकिन जिनमें उस start को drive करने वाला valid predecessor logic नहीं है। एक अच्छी तरह बनी CPM schedule में, एक activity normally इसलिए शुरू होनी चाहिए क्योंकि preceding काम, project access, approvals, procurement, या अन्य required conditions logically satisfied हो चुकी हैं।

## यह क्या Measure करती है

यह metric उन activities की संख्या measure करती है जिनकी start date Data Date के साथ aligned है बिना किसी logical predecessor path के जो explain करे कि काम उस point पर क्यों शुरू हो सकता है।

## Threshold

Target threshold: 0 activities।

## यह क्यों Matter करती है

Data Date पर बिना driving logic के शुरू होने वाली activities schedule की credibility को कमज़ोर कर सकती हैं। वे next period के काम को शुरू होने के लिए ready दिखा सकती हैं जब predecessor काम, approvals, materials, या access conditions को properly model नहीं किया गया हो।

यह इसलिए matter करता है क्योंकि Data Date actual performance और forecast के बीच की boundary है। अगर activities बिना logic के उस boundary पर collect होती हैं, तो forecast unreliable हो सकती है। Float values distorted हो सकती हैं, longest path unclear हो सकती है, और project teams का confidence कमज़ोर हो सकता है कि schedule actually क्या बता रही है।

Primavera P6 users के लिए, यह metric बेहतर update discipline, stronger CPM logic, और अधिक defensible schedule quality reviews को support करती है। यह planners को confirm करने में मदद करती है कि काम एक real schedule reason से शुरू हो रहा है, न कि केवल इसलिए कि software undriven activities को current update date पर move कर दे।

## Related Blog Post

- [Data Date पर बिना Driving Logic के शुरू होने वाली Activities](/hi/blog/activities-starting-on-data-date-no-driving-logic/)
