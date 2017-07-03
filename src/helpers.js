import md5 from "blueimp-md5";

export const getRefValue = (thing, key) => thing.refs[key].value;

export const getRandomId = name => md5(name, Math.random());

export const checkCategory = category => {
  switch (category) {
    case "Books":
      return "книг";
    case "Journals":
      return "журналов";
    case "Booklets":
      return "буклетов";
    default:
      return category;
  }
};
