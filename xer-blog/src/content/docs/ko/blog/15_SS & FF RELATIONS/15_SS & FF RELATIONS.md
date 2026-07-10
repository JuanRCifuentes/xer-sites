---
title: "SS 및 FF 관계"
seo_title: "SS 및 FF 관계 - Primavera P6"
meta_description: "Primavera P6에서 SS 및 FF 관계를 일정관리, 프로젝트 통제, 공정표 품질 관점에서 실무적으로 이해합니다."
author_name: "Juan D Vargas"
author_description: "Project control manager, 30+ years of experience in Project Control"
author_link: "[https://www.linkedin.com/in/juan-d-vargas-v/](https://www.linkedin.com/in/juan-d-vargas-v/)"
keywords:
  - "SS 및 FF 관계"
  - "Primavera P6 SS 및 FF 관계"
  - "공정표 품질"
  - "Primavera P6"
  - "프로젝트 통제"
  - "CPM 로직"
  - "공정표 검토"
slug: "ko-ss-and-ff-relations-in-primavera-p6"
language: "ko"
content_type: "blog"
version: "1.0"
topic: "Primavera P6 공정표관리"
audience:
  - "계획 엔지니어"
  - "스케줄러"
  - "프로젝트 통제 팀"
primary_search_intent: "Primavera P6에서 SS 및 FF 관계를 일정관리, 프로젝트 통제, 공정표 품질 관점에서 실무적으로 이해합니다."
related_metrics:
  - "10_metrics_ko/01_activities_starting_in_dd_with_no_logic_driving/01_overview_template.md"
related_blogs:
  - "10b_blogs_ko/14_RESOURCES BALANCING IN P6/14_RESOURCES BALANCING IN P6.md"
  - "10b_blogs_ko/16_CPM (CRITICAL PATH METHOD)/16_CPM (CRITICAL PATH METHOD).md"
translation_of: "01b_blogs_en/15_SS & FF RELATIONS/15_SS & FF RELATIONS.md"
canonical_url: ""
last_reviewed: "2026-07-02"
---
# SS 및 FF 관계

Start-to-Start(SS)와 Finish-to-Finish(FF)는 Primavera P6에서 유효한 논리 관계 유형입니다. 두 활동이 겹쳐서 수행될 때 단순한 Finish-to-Start 관계보다 더 현실적으로 중첩 작업을 표현할 수 있습니다.

문제는 SS나 FF 자체가 아닙니다. 문제는 활동의 양쪽 끝을 모두 통제해야 하는 상황에서 SS 또는 FF를 단독으로 사용하는 것입니다. 단독 SS 관계는 후속 활동의 시작을 통제하지만 완료를 통제하지 않습니다. 단독 FF 관계는 후속 활동의 완료를 통제하지만 시작을 통제하지 않습니다. 그래서 많은 공정표 검토자는 이런 관계를 half relationship, 즉 반쪽 논리라고 봅니다.

## SS와 FF의 의미

SS 관계는 후속 활동이 선행 활동의 시작 시점에 시작하거나, 선행 활동 시작 후 정의된 lag 이후에 시작할 수 있음을 의미합니다.

FF 관계는 후속 활동이 선행 활동의 완료 시점에 완료하거나, 선행 활동 완료 후 정의된 lag 이후에 완료할 수 있음을 의미합니다.

두 관계 모두 실제 작업을 표현할 수 있습니다. 설계 검토는 설계 작성이 시작된 후 시작될 수 있습니다. 시험은 설치가 끝난 후에야 완료될 수 있습니다. 구역별 시공에서는 한 작업이 다른 작업 시작 후에 시작되지만, 완료 관계도 함께 통제되어야 할 수 있습니다.

## 단독 SS가 불완전할 수 있는 이유

단독 SS는 후속 활동의 시작만 고정합니다. 후속 활동의 완료를 무엇이 통제하는지는 설명하지 않습니다.

후속 활동의 기간이 바뀌거나 활동이 현실적인 범위를 넘어 길어질 경우, 하위 논리가 그 영향을 잡아주지 않으면 일정은 영향을 제대로 보여주지 못할 수 있습니다. 시작은 연결되어 있지만 완료는 떠 있을 수 있습니다.

P6에서는 활동에 predecessor가 있기 때문에 연결된 것처럼 보이지만, 실제로는 작업 흐름을 완전히 설명하지 못할 수 있습니다.

## 단독 FF가 불완전할 수 있는 이유

단독 FF는 반대 문제를 만듭니다. 후속 활동의 완료는 고정하지만, 후속 활동이 언제 시작할 수 있는지는 설명하지 않습니다.

업데이트된 일정에서는 early start가 너무 이른 날짜로 계산될 수 있습니다. 활동이 데이터 날짜 또는 그 이전에 시작 가능한 것처럼 보일 수 있는데, 이는 작업이 실제로 준비되었기 때문이 아니라 시작 조건이 논리로 정의되지 않았기 때문입니다.

이는 여유시간, 주요 경로, 단기 계획 판단을 왜곡할 수 있습니다.

## SS + FF 조합

작업이 실제로 중첩되는 경우 더 강한 모델은 보통 SS + FF 조합입니다.

SS는 후속 활동이 언제 시작할 수 있는지 통제합니다. FF는 후속 활동이 언제 완료될 수 있는지 통제합니다. 둘을 함께 사용하면 중첩 작업의 논리적 범위를 정의할 수 있습니다.

```mermaid
flowchart LR
    A["선행 활동"] -- "SS: 시작 조건" --> B["후속 활동"]
    A -- "FF: 완료 조건" --> B
    B --> C["시작과 완료가 모두 논리로 고정됨"]
```

이 방식은 연속 작업, 구역별 시공, 설계와 검토 사이클, 설치와 시험, 반복 생산 순서에 유용합니다.

## 단독 SS 또는 FF가 허용될 수 있는 경우

모든 단독 SS 또는 FF가 자동으로 잘못된 것은 아닙니다.

후속 활동의 완료가 다른 유효한 downstream 관계로 통제된다면 단독 SS가 허용될 수 있습니다. 후속 활동의 시작이 다른 유효한 predecessor로 통제된다면 단독 FF가 허용될 수 있습니다. 핵심 질문은 활동의 시작과 완료가 네트워크 어딘가에서 모두 통제되는지입니다.

스케줄러는 왜 단독 관계만으로 충분한지 설명할 수 있어야 합니다.

## P6에서 검토하는 방법

P6에서는 SS predecessors, SS successors, FF predecessors, FF successors가 있는 활동을 검토합니다. 특히 유일한 predecessor가 FF인 활동, 또는 유일한 successor가 SS인 활동에 주의합니다.

유용한 필드는 활동 ID, 활동 이름, Start, Finish, Activity Status, 총여유시간, Predecessors, Successors, 관계 유형, Lag, Constraints, 그리고 가능한 경우 주도 관계입니다.

다음을 질문합니다:

- 이 활동은 무엇 때문에 시작할 수 있는가?
- 이 활동의 완료는 무엇이 통제하는가?
- 중첩은 실제 물리적 또는 계약적 조건인가?
- lag가 부족한 세부사항을 숨기고 있는가?
- 관계가 실행 계획을 설명하는가?
- 독립 검토자가 이 논리를 이해할 수 있는가?

## 흔한 문제

흔한 문제는 실제 시작 조건을 모델링하지 않고 SS를 사용해 작업을 앞당기는 것입니다.

또 다른 문제는 FF로 완료일을 붙잡아 두면서 시작을 열어 두는 것입니다.

SS와 FF는 작업을 더 작은 활동으로 나누어야 할 때 대신 사용되기도 합니다. 활동 범위가 너무 넓으면 관계로 결과를 강제하기보다 더 명확한 단계로 분해해야 합니다.

## 좋은 실무

SS와 FF는 의도를 가지고 사용해야 합니다. 날짜를 맞추기 위한 편의가 아니라 실제 순서를 표현해야 합니다.

SS를 사용할 때는 후속 활동의 완료도 논리적으로 통제되는지 확인합니다. FF를 사용할 때는 후속 활동의 시작도 논리적으로 통제되는지 확인합니다.

시작과 완료가 모두 연결되어야 하는 중첩 작업에는 SS + FF 조합을 사용합니다. 단독 SS 또는 FF가 의도적이라면 예외 사유를 문서화합니다.

## 결론

SS와 FF는 P6에서 유용한 도구이지만 절제가 필요합니다. 단독으로 사용되면 활동의 한쪽 끝만 통제하여 불완전한 논리를 만들 수 있습니다.

신뢰할 수 있는 CPM 공정표은 작업이 왜 시작될 수 있는지, 무엇이 완료를 통제하는지 설명해야 합니다. SS와 FF가 이 질문에 답한다면 일정을 강화합니다. 한쪽 끝을 열어 둔다면 검토가 필요한 약한 논리입니다.
## 관련 콘텐츠
- [주도 로직 없이 데이터 날짜에 시작하는 활동: 이 일정 지표가 중요한 이유 - 개요](../../10_metrics_ko/01_activities_starting_in_dd_with_no_logic_driving/01_overview_template.md)
- [P6의 리소스 밸런싱](../14_RESOURCES%20BALANCING%20IN%20P6/14_RESOURCES%20BALANCING%20IN%20P6.md)
- [CPM (Critical Path Method)](../16_CPM%20(CRITICAL%20PATH%20METHOD)/16_CPM%20(CRITICAL%20PATH%20METHOD).md)
