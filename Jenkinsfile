def COLOR_MAP = ['SUCCESS': 'good', 'FAILURE': 'danger', 'UNSTABLE': 'danger', 'ABORTED': 'danger']
def getBuildUser() {
return currentBuild.rawBuild.getCause(Cause.UserIdCause).getUserId()
}
pipeline {
  agent {
    label 'master'
  }
  environment {
    BUILD_USER = ''
    CURRENT_DAY = sh(returnStdout: true, script: 'TZ="Asia/Kolkata" date +%a').trim()
  }
 options {
    buildDiscarder(logRotator(numToKeepStr: '3', artifactNumToKeepStr: '3'))
    office365ConnectorWebhooks([[
                    startNotification: true,
                     url: 'https://outlook.office.com/webhook/11442792-10da-4fd6-890d-7a87d6e72225@9fc702b2-2841-4e91-87cd-e697d843b92d/JenkinsCI/4ca2f5ea5a9540c4a06de11b7cb94aad/18ef65b1-caef-4f1f-a672-743f2f538cbe',
                    
            ]]
        )
  }
  stages {
        stage('clean workspace'){
        steps{
            cleanWs()
        }
        }
        stage('Checkout') {
            steps {
                git branch: 'dev', credentialsId: '0576642c-c792-4fb4-a0d4-04d615f712c8', url: 'https://github.com/PKJCQS/Erework-API-Refactor.git'
            }
        }
          stage('Build') {
          steps{
            sh '''#!/bin/bash
            sudo npm install -g apidoc
            apidoc -i controllers/ -o docs
            sudo npm install
            touch Erework-API-Refactor-${BUILD_ID}.tar.gz
            tar --exclude=Erework-API-Refactor-${BUILD_ID}.tar.gz -zcvf Erework-API-Refactor-${BUILD_ID}.tar.gz .
            echo $?
            aws s3 cp Erework-API-Refactor-${BUILD_ID}.tar.gz s3://ota-artifacts/Erework-API-Refactor/Dev2/Erework-API-Refactor-${BUILD_ID}.tar.gz
            '''
        }
          }
           stage('Deploy') {
           steps{
            sh '''#!/bin/bash
             cd /home/ubuntu/Erework-API-Refactor
             sudo ansible-playbook -i hosts dev.yml -e "BUILD_ID=${BUILD_ID}"
             echo $?
            '''
        }

        }
    
}
post {
    success {
      office365ConnectorSend webhookUrl: 'https://outlook.office.com/webhook/11442792-10da-4fd6-890d-7a87d6e72225@9fc702b2-2841-4e91-87cd-e697d843b92d/JenkinsCI/4ca2f5ea5a9540c4a06de11b7cb94aad/18ef65b1-caef-4f1f-a672-743f2f538cbe',
            color: '#00FF00',
            message: "DEPLOYMENT SUCCESSFUL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})",
            status: 'Success'            

    }
    failure {
      office365ConnectorSend webhookUrl: 'https://outlook.office.com/webhook/11442792-10da-4fd6-890d-7a87d6e72225@9fc702b2-2841-4e91-87cd-e697d843b92d/JenkinsCI/4ca2f5ea5a9540c4a06de11b7cb94aad/18ef65b1-caef-4f1f-a672-743f2f538cbe',
           color: '#00FF00',
            message: "DEPLOYMENT FAIL: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'(${env.BUILD_URL})",
            status: 'failure'            
    }
}
}  
