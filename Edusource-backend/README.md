# Configurations

Please make sure you add a file called application.properties in Edusource-backend/ebookmanagementsystem/src/main/resources folder and below is a template of how u should make sure your file should be

```bash
spring.application.name=ebookmanagementsystem
spring.jpa.hibernate.ddl-auto=update
spring.datasource.url=jdbc:mysql://localhost:3306/database name
spring.datasource.username=mysql username
spring.datasource.password=mysql password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.jpa.show-sql: true
server.port=port number of your choice

aws.s3.secret.key=your aws s3 secret key
aws.s3.access.key=your aws s3 access key
bucket-name=your bucket name

```
