import moment from "moment";

var AWS = require("aws-sdk");

const uploadFile = async (file) => {
  const fileName = `geothermal-${file.name}`;

  return new Promise((resolve, reject) => {
    var params = {
      Key: fileName,
      Body: file,
      ACL: "public-read",
    };
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    var s3bucket = new AWS.S3({ params: { Bucket: "market-place-service" } });
    s3bucket.upload(params, function (err, res) {
      if (err) console.log("Error in uploading file on s3 due to " + err);
      else resolve(res.Location);
    });
  });
};

const formatDate = () => {
  return moment().format("DD MMM YY, h:mm a");
};

export { formatDate, uploadFile };
