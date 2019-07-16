# 내가 실수한것들
- npm으로 모듈을 받고나면 ios경로로 가서 pod update를 꼭 해줄것! 아니면 linking에러로 인해 null is an object에러가 뜬다.
- npm에서 모듈 설치시 cd ios로 이동후 pod install 꼭 해주기!
- android일 경우 npx jetify 꼭 해주기!
- keystore가 없는 이슈 
    프로젝트 -> android -> app경로에서  
    keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
- debug keystore 변경했을시 build-> clean build, rebuild 필수!