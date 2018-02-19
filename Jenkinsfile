node('nodejs') {
  stage 'build'
  openshiftBuild(buildConfig: '${NAME}', showBuildLogs: 'true')
  stage 'deploy'
  openshiftDeploy(deploymentConfig: '${NAME}')
}
