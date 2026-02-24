resource "aws_s3_bucket" "my_erp_bucket" {
  bucket = "devops-s3-bucket-2026"
  
  tags = {
    Name        = "ERP Static Website"
    Environment = "Dev"
  }
}

resource "aws_s3_bucket_website_configuration" "erp_site" {
  bucket = aws_s3_bucket.my_erp_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_public_access_block" "example" {
  bucket = aws_s3_bucket.my_erp_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}