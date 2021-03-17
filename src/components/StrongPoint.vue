<template>
  <v-row justify="center">
    <v-list disabled>
      <v-list-item-group>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-card color="grey lighten-4">
              <v-card-title>
                <span class="headline font-weight-bold">{{item.title}}</span>
              </v-card-title>
              <v-card-text class="title font-weight-light">
                {{item.text}}
              </v-card-text>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-row>
</template>

<script>
export default {
  name: 'StrongPoint',
  data: () => ({
    items: [
      { title: '애플리케이션 구현', text: '설계 → 개발 → 배포 전부' },
      { title: '다양한 개발 경험', text: '웹, 데스크탑, 게임, 보안, 네트워크 등' },
      { title: '다양한 프로그래밍 언어 사용 가능', text: 'C, C++, C#, JAVA, javascript, python, go, lua 등' },
      { title: '협업 경험', text: 'KISA 용역, 동아리 홈페이지 개발, 팀 프로젝트 등' },
      { title: '3D 프로그래밍 경험', text: 'OpenGL, 언리얼엔진' },
      { title: '학점', text: '6학기 평균 4.2' },
      { title: '기타', text: '유니티 설치해봤다도르, 포브스 선정 가장 일 잘하는 CU 알바생 등등...' },
    ],
  }),
}
</script>
