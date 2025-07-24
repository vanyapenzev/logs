let mysql = require('mysql');

const dbconnectionData = {
	admin: {
		host: '127.0.0.1',
		port: 3312,
		user: 'root',
		password: '',
		database: 'admin',
		socketPath: null,  // общаемся с mysql через сокеты
	},
	basicTest: {
		host: '127.0.0.1',
		port: 3312,
		user: 'root',
		password: '',
		database: 'main',
		socketPath: null,  // общаемся с mysql через сокеты
	},
	logsTest: {
		host: '127.0.0.1',
		port: 3312,
		user: 'root',
		password: '',
		database: 'mainlogs',
		socketPath: null,  // общаемся с mysql через сокеты
	},
}

module.exports.createPool = (name) => {
	if (name && dbconnectionData [name]) {
		const db = dbconnectionData [name];
		return mysql.createPool({
			host: db.host,
			port: db.port,
			user: db.user,
			password: db.password,
			database: db.database,
			socketPath: db.socketPath,  // общаемся с mysql через сокеты
			connectionLimit: 100
		})
	}
	return null;
};

module.exports.query = function(pool, sql, props = []) {
	return new Promise(function (resolve, reject) {
		pool.getConnection(function (err, connection) {
            if (err) throw err; // not connected!
			connection.query(sql, props, function (err, res) {
				if (err)
					reject(err);
				else
                    resolve(res);
			});
			connection.release();
		});
	});
};