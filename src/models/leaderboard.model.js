const { Schema, model } = require('mongoose');

const leaderBoardSchema = new Schema(
  {
    cuestionario: { type: Schema.Types.ObjectId, ref: 'Cuestionario' },
    preguntas: [
      { enunciado: String, respuestas: [{ nombre: String, correct: Boolean }] },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('LeaderBoard', leaderBoardSchema);
