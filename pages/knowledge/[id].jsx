const Content = (props) => {
  console.log(props);
  return <>{props.id}</>;
};

export default Content;

export async function getServerSideProps(context) {
  const id = context.params.id;

  return { props: { id } };
}
