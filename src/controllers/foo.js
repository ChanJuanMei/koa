exports.bar = async function foo(ctx) {
  // ctx.session.foo = ctx.session.foo || Math.random();
  // console.log(ctx.session.foo);

  // const isLogin = ctx.session.isLogin  //不在公司局域网时 TODO
  const isLogin = true;
  
  if (!isLogin) {
      return ctx.redirect("/user/login?id=124");
  }

  const titleList = [1,2,3,4,5]
  await ctx.render('foo/bar', { titleList, "layout": "index.ejs" });
}
exports.index = async function foo(ctx) {
  // ctx.session.foo = ctx.session.foo || Math.random();
  // console.log(ctx.session.foo);

  // const isLogin = ctx.session.isLogin  //不在公司局域网时 TODO
  const isLogin = true;
  
  if (!isLogin) {
      return ctx.redirect("/user/login?id=124");
  }

  const titleList = [1,2,3,4,5]
  await ctx.render('index.ejs', { titleList, "layout": "index.ejs" });
}