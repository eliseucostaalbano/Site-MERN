import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URL);
		console.log(`MongoDB Conetado: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Erro: ${error.message}`);
		process.exit(1); // process code 1  significa erro, 0 significa sucesso
	}
};