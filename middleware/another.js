export default function(context) {
  const { route } = context;
  console.log(route.path);
  console.log(window.location.pathname);
}
