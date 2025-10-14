export interface UploadFilesModel {
  idFormalite?: number;
  file?: File[];
  filesBase64?: string[];
  fileNameTypePieceJointe?: FileNameTypePieceJointeModel[];
}

export interface FileNameTypePieceJointeModel {
  fileName?: string;
  idTypePieceJointe?: number;
  typePieceJointe?: TypePieceJointeModel;
}

export interface TypePieceJointeModel {
  id?: number;
  libelle?: string;
  type?: string;
  description?: string;
  obligatoire?: boolean;
  categoryTypePiece?: CategoryTypePieceModel;
}

export interface CategoryTypePieceModel {
  id?: number;
  libelle?: string;
  ref?: string;
}


export interface FileModel {
  lastModified?: number;
  name?: string;
  webkitRelativePath?: string;
  size?: number;
}



