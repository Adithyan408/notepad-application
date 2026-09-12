import React, { useRef, useState } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import {type Tag, type NoteData } from "../App";
import {v4 as uuidV4} from "uuid"

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
    onAddTag : (tag:Tag) => void;
    availableTags : Tag[]
} & Partial<NoteData>

function NoteForm({ onSubmit, onAddTag, availableTags, title="", markdown="", tags=[] }: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectTags, setSelectTags] = useState<Tag[]>(tags);
  const navigate = useNavigate()

  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectTags,
    });
    navigate("..")
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Stack gap={4}>
          <Row>
            <Col>
              <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control ref={titleRef} required defaultValue={title}/>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="tags">
                <Form.Label>Tags</Form.Label>
                <CreatableSelect
                onCreateOption={label => {
                  const newTag = {id: uuidV4(), label}
                  onAddTag(newTag)
                  setSelectTags(prev => [...prev, newTag])
                }}
                  value={selectTags.map((tag) => {
                    return { label: tag.label, value: tag.id };
                  })}
                  options={availableTags.map(tag => {
                    return {label:tag.label, value: tag.id}
                  })}
                  onChange={(tags) => {
                    setSelectTags(
                      tags.map((tag) => {
                        return { label: tag.label, id: tag.value };
                      }),
                    );
                  }}
                  isMulti
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="markdown">
            <Form.Label>Body</Form.Label>
            <Form.Control ref={markdownRef} required as="textarea" rows={15} defaultValue={markdown} />
          </Form.Group>
        </Stack>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Button type="submit" variant="primary">
            Save
          </Button>
          <Link to="..">
            <Button type="button" variant="outline-secondary">
              Cancel
            </Button>
          </Link>
        </Stack>
      </Form>
    </div>
  );
}

export default NoteForm;
