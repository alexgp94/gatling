def ENVIRONMENT_PARAM
def USERS_PARAM
def RAMP_DURATION_PARAM
def DURATION_PARAM
pipeline {
    agent any
    parameters {
        choice(name: 'ENVIRONMENT',
        choices: 'PROD\nMFPRD\nUAT')
        string(name: 'USERS',
        defaultValue: '100',
        description: 'Running test with: # users')
        string(name: 'RAMP_DURATION',
        defaultValue: '10',
        description: 'Ramping users over: # seconds')
        string(name: 'TEST_DURATION',
        defaultValue: '10',
        description: 'Total test duration: # seconds')
    }
    stages {
         stage('Build') {
            steps {
                script {
                    ENVIRONMENT_PARAM = "${params.ENVIRONMENT}"
                    USERS_PARAM = "${params.USERS}"
                    RAMP_DURATION_PARAM = "${params.RAMP_DURATION}"
                    TEST_DURATION_PARAM = "${params.TEST_DURATION}"
                    echo "Build Step"
                    sh 'mvn clean && mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.StockVtexSM -DUSERS=${USERS_PARAM} -DRAMP_DURATION=${RAMP_DURATION_PARAM} -DDURATION=${TEST_DURATION_PARAM} -DENVIRONMENT=${ENVIRONMENT_PARAM}'
               }
            }
         }
         stage('Metrics') {
            steps {
                echo "Metrics"
                sh ' DIR_NAME=$(cat /var/lib/jenkins/workspace/gatling_Vtex/target/gatling/lastRun.txt) && mv /var/lib/jenkins/workspace/gatling_Vtex/target/gatling/$DIR_NAME /var/www/html/ && echo http://3.101.130.24/$DIR_NAME '
            }
         }
         stage('Deploy') {
            steps {
            echo "Deploy"
//                 script {
//                      echo "string branch: http://3.101.130.24/$DIR_NAME"
//                 }
            }
         }
    }
}