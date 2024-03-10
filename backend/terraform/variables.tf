#variables.tf
variable "access_key" {
    description = "Access key to AWS console"
}
variable "secret_key" {
    description = "Secret key to AWS console"
}
variable "region" {
    description = "AWS region"
}
variable "db-dev-username" {
  description = "Dev DB username"
}
variable "db-dev-password" {
  description = "Dev DB password"
}
variable "db-prod-username" {
  description = "Dev DB username"
}
variable "db-prod-password" {
  description = "Dev DB password"
}