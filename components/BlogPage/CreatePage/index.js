import { api } from "../../../utils";
import { useContext, useState } from "react";
import { FaPlus, FaImage } from "react-icons/fa";
import { Context } from "../../../context/Context";

import {
  CreateContainer,
  CreateWrapper,
  SubContainer,
  SubContainer2,
  Divider,
  Header,
  SubHeader,
  Explanation,
  InputWrapper,
  InputHeader,
  InputDisplayImage,
  InputDisplayImage2,
  InputDisplayContainer,
  InputImage,
  InputImageWrapper,
  InputTitle,
  InputItems,
  InputBody,
  ImageName,
  SubmitButton,
} from "./CreatePageElements";
import { useRouter } from "next/router";

function CreatePageSection() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");

  // Currently using 1 buttons for each image (6 max)
  // In future change to 1 button --> integrate delete functionality etc.
  const [files1, setFiles1] = useState(null);
  const [files2, setFiles2] = useState(null);
  const [files3, setFiles3] = useState(null);
  const [files4, setFiles4] = useState(null);
  const [files5, setFiles5] = useState(null);
  const [files6, setFiles6] = useState(null);

  const { user } = useContext(Context);

  // Split body text into array (of paragraphs) to format during blog display
  const handleBody = (e) => {
    setBody(e.split("\n"));
    // console.log(body)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      username: user.username,
      title,
      body,
      category,
      time,
    };

    if (!title || !body || !category || !time || !file) {
      return alert("Please fill out all fields");
    }
    // console.log(newPost)

    // We send images first using /upload,
    // then send image name as string in /posts
    
    // Main Image
    if (file) {
      const data = new FormData();
      const filename = Date.now() + '_' + file.name;
      data.append('name', filename)
      data.append("file", file);

      try {
        const response = await api.post("/upload", data);
        newPost.image = filename;
      } catch (err) {
        console.log(err);
      }
    }

    // -------------- Article Images ---------------------
    if (files1) {
      const data = new FormData();
      const filename = Date.now() + '_' + files1.name;
      data.append('name', filename)
      data.append("file", files1);

      try {
        const response = await api.post("/upload", data);
        newPost.image1 = filename;
      } catch (err) {
        console.log(err);
      }
    }

    if (files2) {
      const data = new FormData();
      const filename = Date.now() + '_' + files2.name;
      data.append('name', filename)
      data.append("file", files2);

      try {
        const response = await api.post("/upload", data);
        newPost.image2 = filename;
      } catch (err) {
        console.log(err);
      }
    }

    if (files3) {
      const data = new FormData();
      const filename = Date.now() + '_' + files3.name;
      data.append('name', filename)
      data.append("file", files3);

      try {
        const response = await api.post("/upload", data);
        newPost.image3 = filename;
      } catch (err) {
        console.log(err);
      }
    }

    if (files4) {
      const data = new FormData();
      const filename = Date.now() + '_' + files4.name;
      data.append('name', filename)
      data.append("file", files4);

      try {
        const response = await api.post("/upload", data);
        newPost.image4 = filename;
      } catch (err) {
        console.log(err);
      }
    }

    if (files5) {
      const data = new FormData();
      const filename = Date.now() + '_' + files5.name;
      data.append('name', filename)
      data.append("file", files5);

      try {
        const response = await api.post("/upload", data);
        newPost.image5 = filename;
      } catch (err) {
        console.log(err);
      }
    }

    if (files6) {
      const data = new FormData();
      const filename = Date.now() + '_' + files6.name;
      data.append('name', filename)
      data.append("file", files6);

      try {
        const response = await api.post("/upload", data);
        newPost.image6 = filename;
      } catch (err) {
        console.log(err);
      }
    }

    // -----------------------------------------------------

    try {
      const response = await api.post("/posts", newPost);

      const slug = response.data.title.replace(/\s/g, "-").toLowerCase();
      router.push("/blog/" + slug);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CreateContainer>
      <Header>Create New Post</Header>
      <CreateWrapper>
        <InputWrapper>
          {file && <InputDisplayImage src={URL.createObjectURL(file)} />}
          <InputHeader>
            <InputImageWrapper htmlFor="fileInput">
              <FaPlus color="grey" />
            </InputImageWrapper>
            <InputImage
              type="file"
              id="fileInput"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </InputHeader>
          <SubContainer>
            <SubHeader>Title</SubHeader>
            <Explanation>
              This is the title of the blog/article, ensure a clear and concise
              sentence structure
            </Explanation>
            <InputTitle
              placeholder="Blog Title"
              autoFocus={true}
              onChange={(e) =>
                setTitle(
                  e.target.value.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
                )
              }
            />
          </SubContainer>
          <InputHeader>
            <SubContainer>
              <SubHeader>Category</SubHeader>
              <Explanation>The category of your article</Explanation>
              <InputItems
                placeholder="Finance, Jobs, Salary"
                autoFocus={true}
                onChange={(e) => setCategory(e.target.value)}
              />
            </SubContainer>
            <Divider />
            <SubContainer>
              <SubHeader>Time</SubHeader>
              <Explanation>How long it takes to read the article</Explanation>
              <InputItems
                placeholder="10 mins"
                autoFocus={true}
                onChange={(e) => setTime(e.target.value)}
              />
            </SubContainer>
          </InputHeader>
          <SubContainer>
            <SubHeader>Content</SubHeader>
            <Explanation>
              The body of your article. Use .h2 for headers and empty lines to
              denote paragraphs.
            </Explanation>
            <InputHeader>
              <InputImageWrapper htmlFor="filesInput1">
                <FaImage />
                <InputImage
                  type="file"
                  id="filesInput1"
                  onChange={(e) => setFiles1(e.target.files[0])}
                />
              </InputImageWrapper>
              <InputImageWrapper htmlFor="filesInput2">
                <FaImage />
                <InputImage
                  type="file"
                  id="filesInput2"
                  onChange={(e) => setFiles2(e.target.files[0])}
                />
              </InputImageWrapper>
              <InputImageWrapper htmlFor="filesInput3">
                <FaImage />
                <InputImage
                  type="file"
                  id="filesInput3"
                  onChange={(e) => setFiles3(e.target.files[0])}
                />
              </InputImageWrapper>
              <InputImageWrapper htmlFor="filesInput4">
                <FaImage />
                <InputImage
                  type="file"
                  id="filesInput4"
                  onChange={(e) => setFiles4(e.target.files[0])}
                />
              </InputImageWrapper>
              <InputImageWrapper htmlFor="filesInput5">
                <FaImage />
                <InputImage
                  type="file"
                  id="filesInput5"
                  onChange={(e) => setFiles5(e.target.files[0])}
                />
              </InputImageWrapper>
              <InputImageWrapper htmlFor="filesInput6">
                <FaImage />
                <InputImage
                  type="file"
                  id="filesInput6"
                  onChange={(e) => setFiles6(e.target.files[0])}
                />
              </InputImageWrapper>
            </InputHeader>
          </SubContainer>

          <SubContainer>
            <InputBody
              placeholder="Write your content here..."
              type="text"
              rows="30"
              onChange={(e) => handleBody(e.target.value)}
            ></InputBody>
          </SubContainer>

          <SubContainer>
            <SubHeader>Body Images</SubHeader>
            <Explanation>Images that appear in the article body</Explanation>
          </SubContainer>

          <InputDisplayContainer>
            <SubContainer2>
              {files1 && (
                <InputDisplayImage2 src={URL.createObjectURL(files1)} />
              )}
              {files1 && <ImageName>{user._id + "_" + files1.name}</ImageName>}
            </SubContainer2>

            <SubContainer2>
              {files2 && (
                <InputDisplayImage2 src={URL.createObjectURL(files2)} />
              )}
              {files2 && <ImageName>{user._id + "_" + files2.name}</ImageName>}
            </SubContainer2>

            <SubContainer2>
              {files3 && (
                <InputDisplayImage2 src={URL.createObjectURL(files3)} />
              )}
              {files3 && <ImageName>{user._id + "_" + files3.name}</ImageName>}
            </SubContainer2>

            <SubContainer2>
              {files4 && (
                <InputDisplayImage2 src={URL.createObjectURL(files4)} />
              )}
              {files4 && <ImageName>{user._id + "_" + files4.name}</ImageName>}
            </SubContainer2>

            <SubContainer2>
              {files5 && (
                <InputDisplayImage2 src={URL.createObjectURL(files5)} />
              )}
              {files5 && <ImageName>{user._id + "_" + files5.name}</ImageName>}
            </SubContainer2>

            <SubContainer2>
              {files6 && (
                <InputDisplayImage2 src={URL.createObjectURL(files6)} />
              )}
              {files6 && <ImageName>{user._id + "_" + files6.name}</ImageName>}
            </SubContainer2>
          </InputDisplayContainer>

          <SubmitButton
            variant="contained"
            disableElevation
            onClick={(e) => handleSubmit(e)}
          >
            Create Post
          </SubmitButton>
        </InputWrapper>
      </CreateWrapper>
    </CreateContainer>
  );
}

export default CreatePageSection;
