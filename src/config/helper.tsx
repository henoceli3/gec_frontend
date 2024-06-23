function getAge(startDate: Date) {
  const today = new Date();
  const age = today.getFullYear() - startDate.getFullYear();
  const m = today.getMonth() - startDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < startDate.getDate())) {
    return age - 1;
  }
  return age;
}

export { getAge };
