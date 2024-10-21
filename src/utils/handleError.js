export function handleError(error, res) {
  console.error(error);
  res
    .status(500)
    .json({ message: 'Internal server error', error: error.message });
}
