const { Schema, model } = require('mongoose');

const leaderBoardSchema = new Schema(
  {
    cuestionario: { type: Schema.Types.ObjectId, ref: 'Cuestionario' },
    participantes: [
      { username: String, minuto: Number, segundo: Number, puntos: Number },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('LeaderBoard', leaderBoardSchema);
