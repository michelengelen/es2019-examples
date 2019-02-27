function logId(person) {
  // set a default value beforehand
  let id = person.data.id;
  try {
    // try to store the id
    id = person.data.id;
  } catch {}
  console.log(id);
}

logId({});
