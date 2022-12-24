const FtpDeploy = require('ftp-deploy')
const ftpDeploy = new FtpDeploy()

const config = {
	user: 'deploy@m1d1.black',
	password: 's8n3s9U2r',
	host: 'm1d1.black',
	port: 21,
	localRoot: __dirname + '/dist',
	remoteRoot: '/public_html/',
	include: ['.*', '*', '**/*'],
	exclude: ['dist/**/*.map'],
	deleteRemote: true,
	forcePasv: true,
	sftp: false
}

ftpDeploy
	.deploy(config)
	.then((res) => console.log('finished:', res))
	.catch((err) => console.log(err))
