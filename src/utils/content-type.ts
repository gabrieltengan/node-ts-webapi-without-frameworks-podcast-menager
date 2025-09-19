export enum ContentType {
  // Tipos de dados mais comuns
  JSON = "application/json",
  TEXT = "text/plain",
  HTML = "text/html",
  XML = "application/xml",
  FORM_URLENCODED = "application/x-www-form-urlencoded",
  FORM_DATA = "multipart/form-data",

  // Arquivos e mídia
  PDF = "application/pdf",
  CSV = "text/csv",
  ZIP = "application/zip",
  OCTET_STREAM = "application/octet-stream", // Binário genérico

  // Imagens
  PNG = "image/png",
  JPEG = "image/jpeg",
  GIF = "image/gif",
  WEBP = "image/webp",
  SVG = "image/svg+xml",

  // Áudio
  MP3 = "audio/mpeg",
  WAV = "audio/wav",
  OGG_AUDIO = "audio/ogg",

  // Vídeo
  MP4 = "video/mp4",
  WEBM = "video/webm",
  OGG_VIDEO = "video/ogg",

  // Outros formatos úteis
  JAVASCRIPT = "application/javascript",
  CSS = "text/css",
  YAML = "application/x-yaml",
  MARKDOWN = "text/markdown"
}
