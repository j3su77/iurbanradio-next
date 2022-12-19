import { MainLayout, PostEdit } from "../../components";

const crear = () => {
  return (
    <MainLayout title={"Crear publicación"} pageDescription={""}>
      <PostEdit
        isCreating={true}
      />
    </MainLayout>
  );
};

export default crear;
