import React, { useContext } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Select from "@material-ui/core/Select";
import AddIcon from "@material-ui/icons/Add";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import RemoveIcon from "@material-ui/icons/Remove";
import IconButton from "@material-ui/core/IconButton";
import Edge from "./Edge";
import { AppContext } from "./index";

export const Node = ({
  node,
  edges,
  onRemoveEdge,
  onAddEdge
}: {
  node: any;
  edges: any[];
  onRemoveEdge: (edge: any) => void;
  onAddEdge: (edge: any) => void;
}) => {
  const value = useContext(AppContext);

  const removeEdge = edge => {
    const matches = edges.forEach(({ source, target }, idx) => {
      if (edge.source === source && edge.target === target) {
        edges.splice(idx, 1);
        console.log(edges);
      }
    });
  };

  const getEdgesForSource = (sourceId: string) => {
    return edges.filter(edge => edge.source === sourceId);
  };

  return (
    <ListItem key={node.id}>
      <ListItemText
        primary={node.name}
        secondary={
          <React.Fragment>
            <List>
              {getEdgesForSource(node.id).map(edge => (
                <Edge edge={edge} />
              ))}
              <ListItem>
              <ListItemText primary={'Add Edge to Node'} />
                <ListItemSecondaryAction>
                  <ListItemIcon>
                    <IconButton>
                      <AddIcon />
                    </IconButton>
                  </ListItemIcon>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </React.Fragment>
        }
      />
      <ListItemSecondaryAction>
        <ListItemIcon>
          <IconButton
            className="drag-handle"
            onClick={() => {
              alert("clicked");
            }}
          >
            <DragHandleIcon />
          </IconButton>
        </ListItemIcon>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
