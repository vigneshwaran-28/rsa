// console.log(
//   `-----BEGIN RSA PUBLIC KEY-----
// MIGJAoGBAMnn/jRnINn9DWW9JQgLf0EesJsSFeUa/qDALzzWsEDre9Tnlg5EI2BP
// iqpVhlXseiOnUbzErFgIbtW4bCiArOMIvQLjfnUIIvBbPV7LFtmpiaMJApT3kG/A
// kvx9BrcPkxHod0q5Vz62klJvwRJC+xvnRfCgYVI9VFjphkxuZFMbAgMBAAE=
// -----END RSA PUBLIC KEY-----` ===
//     `-----BEGIN RSA PUBLIC KEY-----
// MIGJAoGBAMnn/jRnINn9DWW9JQgLf0EesJsSFeUa/qDALzzWsEDre9Tnlg5EI2BP
// iqpVhlXseiOnUbzErFgIbtW4bCiArOMIvQLjfnUIIvBbPV7LFtmpiaMJApT3kG/A
// kvx9BrcPkxHod0q5Vz62klJvwRJC+xvnRfCgYVI9VFjphkxuZFMbAgMBAAE=
// -----END RSA PUBLIC KEY-----`
// );

// console.log(
//   `YDxH6j6M2cni2G59HGf2ryq4FUsvWGWpSLIaD/u4qqyybL1VdqLuQqtmhRlTo2xFbUjzPno4fT1gMN3jhTdqdMhnho7TJfEKoYFsef9Jfsntft7+o3iG3P2zTePcG/QTlLDVQrVa04n0o5FoCUvoV8OGpDBFar0g3rXcnLWhcClOiMgoVcI4SS1zVxE+oE5ib5OPNQRCKi9W4ZCDLCAd05jQrqddVPKaTBrctgi9YYoPRUYDfmrTNwMBhZkjZtjhSzxJ9irx8ooDafVjNVHDG/g1aBWQhr5Km6NtK5X3Vbr1fuKkcECBUwJrazn7IAVMg/hgF43B6J1mtbB9Xvoueg==` ===
//     `R6gxnWGG0dk4vh/Hi0cUOcbvJIev7ypm7cDU1Dxu7wQe8X0V7xKN/smtVoMAiFdcj7LgQmiE4djpqY3Uyuq9mX3Ca3x3g9LfRoQv5ENmCpea+VZmd3Mm45UnW9S/2bduQM8WMkBuoH09y6OKFi447tr5BZ0pjhlpg6bIrgoYexk=`
// );
const data = {
  operatorId: "alpha636",
  userId: "xyz_user_id",
  providerName: "DC",
  platformId: "desktop",
  currency: "INR",
  clientIp: "1.1.1.1",
  username: "xyzuser",
  lobby: false,
  gameId: "105001",
};

const buffer = new ArrayBuffer(data);
const view = new Int32Array(buffer);

console.log(buffer,view);