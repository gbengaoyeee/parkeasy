#main.tf
#defining the provider as aws
provider "aws" {
    region     = "${var.region}"
    access_key = "${var.access_key}"
    secret_key = "${var.secret_key}"
}



#create a RDS Database Instance
resource "aws_db_instance" "parkeasy-db-dev" {
  engine               = "Postgres"
  identifier           = "parkeasy-db-dev"
  allocated_storage    =  20
  engine_version       = "15.4"
  instance_class       = "db.t3.micro"
  username             = "${var.db-dev-username}"
  password             = "${var.db-dev-password}"
  skip_final_snapshot  = true
  publicly_accessible =  true
  db_name = "parkeasydevdb"
}