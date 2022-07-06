import strings from '../models/strings.js';

export default function isDateValid(req, res, next) {
  const { initDate, endDate } = req.body;

  const now = new Date();

  // Has to contain both dates
  if (!initDate || !endDate) {
    return res
      .status(403)
      .json({ message: strings.errors.events.missingEvent });
  }
  // Event can't happen in the past
  if (initDate >= endDate) {
    return res.status(403).json({ message: strings.errors.events.hourConflic });
  }
  if (initDate <= now || endDate <= now) {
    return res
      .status(403)
      .json({ message: strings.errors.events.enventOnPast });
  }

  return next();
}
