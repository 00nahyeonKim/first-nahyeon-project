import matplotlib.pyplot as plt
import numpy as np

# 가상의 데이터 생성
np.random.seed(42)
study_hours = np.random.randint(1, 10, 20)
exam_scores = 2 * study_hours + np.random.normal(0, 2, 20)

# 산점도 및 회귀선 작성
plt.scatter(study_hours, exam_scores, label='데이터 포인트')
plt.plot(np.unique(study_hours), np.poly1d(np.polyfit(study_hours, exam_scores, 1))(np.unique(study_hours)), color='red', label='회귀선')

# 축 레이블 및 제목 추가
plt.xlabel('학습 시간')
plt.ylabel('시험 성적')
plt.title('학습 시간과 시험 성적의 양의 선형 상관관계')
plt.legend()

# 그래프 표시
plt.show()

