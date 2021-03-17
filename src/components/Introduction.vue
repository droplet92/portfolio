<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="1600"
    >
      <v-row>
        <v-col sm="4" >
          <v-img
            style="margin-left: 1rem"
            src="../assets/profile.jpg"
          />
        </v-col>
        <v-col>
          <v-card-text>
            <h1 class="font-weight-bold ml-8 mb-4">
              이한수
            </h1>
            <v-timeline
              align-top
            >
              <v-timeline-item
                v-for="(node, key) in nodes"
                :key="key"
                :color="node.color"
                small
              >
                <template
                  v-if="node.year"
                  v-slot:opposite
                >
                  <span
                    :class="`headline font-weight-bold ${node.color}--text`"
                    v-text="node.year"
                  />
                </template>
                <v-card class="elevation-2">
                  <v-card-title>
                    {{ node.title }}
                  </v-card-title>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  data: () => ({
    isActive: false,
      nodes: [
        {
          year: 2017,
          title: '광운대학교 컴퓨터정보공학부 입학',
          color: 'yellow',
        },
        {
          title: '국민대 x 광운대 SW Challenge 3등',
          color: 'yellow',
        },
        {
          title: '광운대 IoT 스마트 SW 경진대회 우수상(2등)',
          color: 'yellow',
        },
        {
          title: '컴퓨터정보공학부 1학년 수석',
          color: 'amber',
        },
        {
          year: 2019,
          title: 'KISA(한국인터넷진흥원) 개발/구축 용역',
          color: 'amber',
        },
        {
          year: 2020,
          title: '컴퓨터정보공학부 3-1 차석',
          color: 'orange',
        },
        {
          title: 'TOPCIT 수준 3 (503/1000)',
          color: 'orange',
        },
        {
          title: '컴퓨터 동아리 COMs 학술지 작성 "MPU6050 센서를 이용한 모션 캡처"',
          color: 'deep-orange',
        },
        {
          year: 2021,
          title: '산학연계 SW 프로젝트 (학습을 통한 PC 데이터 로깅 및 관리 솔루션 개발)',
          color: 'deep-orange',
        },
      ],
  }),
}
</script>
