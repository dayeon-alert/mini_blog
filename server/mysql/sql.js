module.exports = {
  postList: "select id, title, content from REACT_BLOG",
  postInsert: "insert into REACT_BLOG set ?",
  postDelete: "delete from REACT_BLOG where id=?",
};
