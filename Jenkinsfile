def ENVIRONMENT_PARAM
def USERS_PARAM
def RAMP_DURATION_PARAM
def DURATION_PARAM
pipeline {
    agent any
    parameters {
        choice(name: 'ENVIRONMENT',
        choices: 'UAT\nPROD\nMFPRD')
        string(name: 'USERS',
        defaultValue: '10',
        description: 'Running test with: # users')
        string(name: 'RAMP_DURATION',
        defaultValue: '10',
        description: 'Ramping users over: # seconds')
        string(name: 'DURATION',
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
                    DURATION_PARAM = "${params.DURATION}"
                    echo "Build Step"
                    sh 'mvn clean && mvn gatling:test -Dgatling.simulationClass=com.gatling.simulations.Simulator -DUSERS=${USERS_PARAM} -DRAMP_DURATION=${RAMP_DURATION_PARAM} -DDURATION=${DURATION_PARAM} -DENVIRONMENT=${ENVIRONMENT_PARAM}'
               }
            }
         }
         stage('Metrics') {
            steps {
                echo "Metrics"
                sh ' DIR_NAME=$(cat /var/lib/jenkins/workspace/gatling_AlexRepo/target/gatling/lastRun.txt) && mv /var/lib/jenkins/workspace/gatling_AlexRepo/target/gatling/$DIR_NAME /var/www/html/ && echo http://3.101.130.24/$DIR_NAME '
            }
         }
         stage('Deploy') {
            steps {
                echo "Deploy Step"
            }
         }
    }
}