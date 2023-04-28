module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});



// eae4a86282f0beabbb46db2726c7598de29faad7e63cdf2ce2af0ecbd612c6b8affa929b064dab28d35f83fbebb50968f6ff727a153d254eee4e238a1fdff667499a85004a204eaa3313d1b762beb48821be1e8f0f46ef840535fdf41950daf82ccceb2cc7f201451496cb2cef1c18a3da815563c1b475cd49c00cf7db2d6bc1