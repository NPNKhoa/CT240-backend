export function handleError(res, error) {
  console.error(error);
  res
    .status(500)
    .json({ message: 'Internal server error', error: error.message });
}
