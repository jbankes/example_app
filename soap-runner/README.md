# SoapUI Integration

Use this document to understand how to use the integrated SoapUI platform as it has been set up in this project. 

## Requirements 
1. Maven - built/tested with [Maven 3.5.4](https://maven.apache.org/download.cgi)
2. Java  - built/tested with Java 8
3. Git   - Clone the repository

## Run from the commandline
To run this from the command-line run the following command

```
soap-runner $ mvn clean test -DprojectFile=soapui-project.xml 
```

This will run the example project included in the repository. The example project hits a free test rest api
available online called [JSONPlaceholder](https://jsonplaceholder.typicode.com/). (Thank you for this 
excellent service!)

You can replace `soapui-project.xml` with whatever filename you would like to run your soap tests from 
the Maven call

## Running in Jenkinsfile
Currently you would have to hardcode the value into the second stage of the pipeline included in the parent directory
of this project. Future goals would be to have a shared library function that will grab all `*.xml` files in the soap
directory. 



