
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.0.0
 * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
 */
Prisma.prismaVersion = {
  client: "6.0.0",
  engine: "5dbef10bdbfb579e07d35cc85fb1518d357cb99e"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DepartmentsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  created_at: 'created_at'
};

exports.Prisma.Evaluation_criteriaScalarFieldEnum = {
  id: 'id',
  parent_id: 'parent_id',
  title: 'title',
  description: 'description',
  max_score: 'max_score',
  sort_order: 'sort_order',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Evaluation_criteria_inputsScalarFieldEnum = {
  id: 'id',
  evaluation_instance_id: 'evaluation_instance_id',
  criteria_id: 'criteria_id',
  staff_input_text: 'staff_input_text',
  staff_attachment: 'staff_attachment'
};

exports.Prisma.Evaluation_evaluator_scoresScalarFieldEnum = {
  id: 'id',
  evaluation_evaluator_status_id: 'evaluation_evaluator_status_id',
  criteria_id: 'criteria_id',
  score: 'score',
  comment: 'comment'
};

exports.Prisma.Evaluation_evaluator_statusScalarFieldEnum = {
  id: 'id',
  evaluation_instance_id: 'evaluation_instance_id',
  evaluator_id: 'evaluator_id',
  status: 'status',
  total_score: 'total_score',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Evaluation_hierarchiesScalarFieldEnum = {
  id: 'id',
  evaluatee_job_id: 'evaluatee_job_id',
  evaluator_job_id: 'evaluator_job_id',
  level: 'level',
  created_at: 'created_at'
};

exports.Prisma.Evaluation_instancesScalarFieldEnum = {
  id: 'id',
  round_id: 'round_id',
  evaluatee_id: 'evaluatee_id',
  evaluated_job_id: 'evaluated_job_id',
  status: 'status',
  total_score_average: 'total_score_average',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Evaluation_roundsScalarFieldEnum = {
  id: 'id',
  title: 'title',
  target_score: 'target_score',
  status: 'status',
  start_date: 'start_date',
  end_date: 'end_date',
  created_at: 'created_at'
};

exports.Prisma.JobsScalarFieldEnum = {
  id: 'id',
  department_id: 'department_id',
  title: 'title',
  job_level: 'job_level',
  description: 'description',
  created_at: 'created_at'
};

exports.Prisma.SettingsScalarFieldEnum = {
  setting_key: 'setting_key',
  setting_value: 'setting_value',
  updated_at: 'updated_at'
};

exports.Prisma.User_jobsScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  job_id: 'job_id',
  created_at: 'created_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  id: 'id',
  prefix: 'prefix',
  firstname: 'firstname',
  lastname: 'lastname',
  username: 'username',
  password: 'password',
  role: 'role',
  department_id: 'department_id',
  job_id: 'job_id',
  profile_image: 'profile_image',
  line_user_id: 'line_user_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.DepartmentsOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.evaluation_criteriaOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description'
};

exports.Prisma.evaluation_criteria_inputsOrderByRelevanceFieldEnum = {
  staff_input_text: 'staff_input_text',
  staff_attachment: 'staff_attachment'
};

exports.Prisma.evaluation_evaluator_scoresOrderByRelevanceFieldEnum = {
  comment: 'comment'
};

exports.Prisma.evaluation_roundsOrderByRelevanceFieldEnum = {
  title: 'title'
};

exports.Prisma.jobsOrderByRelevanceFieldEnum = {
  title: 'title',
  description: 'description'
};

exports.Prisma.settingsOrderByRelevanceFieldEnum = {
  setting_key: 'setting_key',
  setting_value: 'setting_value'
};

exports.Prisma.usersOrderByRelevanceFieldEnum = {
  prefix: 'prefix',
  firstname: 'firstname',
  lastname: 'lastname',
  username: 'username',
  password: 'password',
  profile_image: 'profile_image',
  line_user_id: 'line_user_id'
};
exports.evaluation_evaluator_status_status = exports.$Enums.evaluation_evaluator_status_status = {
  pending: 'pending',
  completed: 'completed'
};

exports.evaluation_rounds_status = exports.$Enums.evaluation_rounds_status = {
  open: 'open',
  closed: 'closed'
};

exports.evaluation_instances_status = exports.$Enums.evaluation_instances_status = {
  pending_staff: 'pending_staff',
  pending_evaluator: 'pending_evaluator',
  completed: 'completed'
};

exports.users_role = exports.$Enums.users_role = {
  admin: 'admin',
  evaluator: 'evaluator',
  staff: 'staff'
};

exports.Prisma.ModelName = {
  Departments: 'Departments',
  evaluation_criteria: 'evaluation_criteria',
  evaluation_criteria_inputs: 'evaluation_criteria_inputs',
  evaluation_evaluator_scores: 'evaluation_evaluator_scores',
  evaluation_evaluator_status: 'evaluation_evaluator_status',
  evaluation_hierarchies: 'evaluation_hierarchies',
  evaluation_instances: 'evaluation_instances',
  evaluation_rounds: 'evaluation_rounds',
  jobs: 'jobs',
  settings: 'settings',
  user_jobs: 'user_jobs',
  users: 'users'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\xampp\\htdocs\\npcgo\\prisma\\generated\\client-job",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\xampp\\htdocs\\npcgo\\prisma\\schema.job.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "6.0.0",
  "engineVersion": "5dbef10bdbfb579e07d35cc85fb1518d357cb99e",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL_JOB",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"./generated/client-job\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL_JOB\")\n}\n\nmodel Departments {\n  id         Int      @id @default(autoincrement())\n  name       String   @db.VarChar(255)\n  created_at DateTime @default(now()) @db.Timestamp(0)\n  jobs       jobs[]\n  users      users[]\n\n  @@map(\"departments\")\n}\n\nmodel evaluation_criteria {\n  id                          Int                           @id @default(autoincrement())\n  parent_id                   Int?\n  title                       String                        @db.VarChar(255)\n  description                 String?                       @db.Text\n  max_score                   Decimal                       @default(10.00) @db.Decimal(5, 2)\n  sort_order                  Int?                          @default(0)\n  created_at                  DateTime                      @default(now()) @db.Timestamp(0)\n  updated_at                  DateTime                      @default(now()) @db.Timestamp(0)\n  evaluation_criteria         evaluation_criteria?          @relation(\"evaluation_criteriaToevaluation_criteria\", fields: [parent_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"fk_parent_criteria\")\n  other_evaluation_criteria   evaluation_criteria[]         @relation(\"evaluation_criteriaToevaluation_criteria\")\n  evaluation_criteria_inputs  evaluation_criteria_inputs[]\n  evaluation_evaluator_scores evaluation_evaluator_scores[]\n\n  @@index([parent_id], map: \"fk_parent_criteria\")\n}\n\nmodel evaluation_criteria_inputs {\n  id                     Int                  @id @default(autoincrement())\n  evaluation_instance_id Int\n  criteria_id            Int\n  staff_input_text       String?              @db.Text\n  staff_attachment       String?              @db.VarChar(255)\n  evaluation_criteria    evaluation_criteria  @relation(fields: [criteria_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"evaluation_criteria_inputs_ibfk_2\")\n  evaluation_instances   evaluation_instances @relation(fields: [evaluation_instance_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"fk_crit_inputs_instance\")\n\n  @@unique([evaluation_instance_id, criteria_id], map: \"uq_input\")\n  @@index([criteria_id], map: \"criteria_id\")\n}\n\nmodel evaluation_evaluator_scores {\n  id                             Int                         @id @default(autoincrement())\n  evaluation_evaluator_status_id Int\n  criteria_id                    Int\n  score                          Decimal                     @default(0.00) @db.Decimal(5, 2)\n  comment                        String?                     @db.Text\n  evaluation_evaluator_status    evaluation_evaluator_status @relation(fields: [evaluation_evaluator_status_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"evaluation_evaluator_scores_ibfk_1\")\n  evaluation_criteria            evaluation_criteria         @relation(fields: [criteria_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"evaluation_evaluator_scores_ibfk_2\")\n\n  @@unique([evaluation_evaluator_status_id, criteria_id], map: \"uq_ev_score\")\n  @@index([criteria_id], map: \"criteria_id\")\n}\n\nmodel evaluation_evaluator_status {\n  id                          Int                                @id @default(autoincrement())\n  evaluation_instance_id      Int\n  evaluator_id                Int\n  status                      evaluation_evaluator_status_status @default(pending)\n  total_score                 Decimal?                           @default(0.00) @db.Decimal(5, 2)\n  created_at                  DateTime                           @default(now()) @db.Timestamp(0)\n  updated_at                  DateTime                           @default(now()) @db.Timestamp(0)\n  evaluation_evaluator_scores evaluation_evaluator_scores[]\n  users                       users                              @relation(fields: [evaluator_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"evaluation_evaluator_status_ibfk_2\")\n  evaluation_instances        evaluation_instances               @relation(fields: [evaluation_instance_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"fk_eval_status_instance\")\n\n  @@unique([evaluation_instance_id, evaluator_id], map: \"uq_ev_status\")\n  @@index([evaluator_id], map: \"evaluator_id\")\n}\n\nmodel evaluation_hierarchies {\n  id                                                 Int      @id @default(autoincrement())\n  evaluatee_job_id                                   Int\n  evaluator_job_id                                   Int\n  level                                              Int?     @default(1)\n  created_at                                         DateTime @default(now()) @db.Timestamp(0)\n  jobs_evaluation_hierarchies_evaluatee_job_idTojobs jobs     @relation(\"evaluation_hierarchies_evaluatee_job_idTojobs\", fields: [evaluatee_job_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"fk_evaluatee_job\")\n  jobs_evaluation_hierarchies_evaluator_job_idTojobs jobs     @relation(\"evaluation_hierarchies_evaluator_job_idTojobs\", fields: [evaluator_job_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"fk_evaluator_job\")\n\n  @@unique([evaluatee_job_id, evaluator_job_id], map: \"uq_eval\")\n  @@index([evaluator_job_id], map: \"fk_evaluator_job\")\n}\n\nmodel evaluation_instances {\n  id                          Int                           @id @default(autoincrement())\n  round_id                    Int\n  evaluatee_id                Int\n  evaluated_job_id            Int?\n  status                      evaluation_instances_status   @default(pending_staff)\n  total_score_average         Decimal?                      @default(0.00) @db.Decimal(5, 2)\n  created_at                  DateTime                      @default(now()) @db.Timestamp(0)\n  updated_at                  DateTime                      @default(now()) @db.Timestamp(0)\n  evaluation_criteria_inputs  evaluation_criteria_inputs[]\n  evaluation_evaluator_status evaluation_evaluator_status[]\n  evaluation_rounds           evaluation_rounds             @relation(fields: [round_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"evaluation_instances_ibfk_1\")\n  users                       users                         @relation(fields: [evaluatee_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"evaluation_instances_ibfk_2\")\n  jobs                        jobs?                         @relation(fields: [evaluated_job_id], references: [id], onUpdate: Restrict, map: \"fk_evaluated_job\")\n\n  @@unique([round_id, evaluatee_id, evaluated_job_id], map: \"uq_inst\")\n  @@index([evaluated_job_id], map: \"fk_evaluated_job\")\n  @@index([evaluatee_id], map: \"idx_evaluatee_id\")\n  @@index([round_id], map: \"idx_round_id\")\n}\n\nmodel evaluation_rounds {\n  id                   Int                      @id @default(autoincrement())\n  title                String                   @db.VarChar(255)\n  target_score         Decimal?                 @default(100.00) @db.Decimal(5, 2)\n  status               evaluation_rounds_status @default(open)\n  start_date           DateTime?                @db.Date\n  end_date             DateTime?                @db.Date\n  created_at           DateTime                 @default(now()) @db.Timestamp(0)\n  evaluation_instances evaluation_instances[]\n}\n\nmodel jobs {\n  id                                                                   Int                      @id @default(autoincrement())\n  department_id                                                        Int\n  title                                                                String                   @db.VarChar(255)\n  job_level                                                            Int?                     @default(1)\n  description                                                          String?                  @db.Text\n  created_at                                                           DateTime                 @default(now()) @db.Timestamp(0)\n  evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs evaluation_hierarchies[] @relation(\"evaluation_hierarchies_evaluatee_job_idTojobs\")\n  evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs evaluation_hierarchies[] @relation(\"evaluation_hierarchies_evaluator_job_idTojobs\")\n  evaluation_instances                                                 evaluation_instances[]\n  departments                                                          Departments              @relation(fields: [department_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"jobs_ibfk_1\")\n  user_jobs                                                            user_jobs[]\n  users                                                                users[]\n\n  @@index([department_id], map: \"department_id\")\n}\n\nmodel settings {\n  setting_key   String   @id @db.VarChar(50)\n  setting_value String?  @db.Text\n  updated_at    DateTime @default(now()) @db.Timestamp(0)\n}\n\nmodel user_jobs {\n  id         Int      @id @default(autoincrement())\n  user_id    Int\n  job_id     Int\n  created_at DateTime @default(now()) @db.Timestamp(0)\n  users      users    @relation(fields: [user_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"user_jobs_ibfk_1\")\n  jobs       jobs     @relation(fields: [job_id], references: [id], onDelete: Cascade, onUpdate: Restrict, map: \"user_jobs_ibfk_2\")\n\n  @@unique([user_id, job_id], map: \"uq_user_job\")\n  @@index([job_id], map: \"job_id\")\n}\n\nmodel users {\n  id                          Int                           @id @default(autoincrement())\n  prefix                      String?                       @db.VarChar(50)\n  firstname                   String                        @db.VarChar(100)\n  lastname                    String                        @db.VarChar(100)\n  username                    String                        @unique(map: \"username\") @db.VarChar(100)\n  password                    String                        @db.VarChar(255)\n  role                        users_role                    @default(staff)\n  department_id               Int?\n  job_id                      Int?\n  profile_image               String?                       @db.VarChar(255)\n  line_user_id                String?                       @db.VarChar(255)\n  created_at                  DateTime                      @default(now()) @db.Timestamp(0)\n  updated_at                  DateTime                      @default(now()) @db.Timestamp(0)\n  evaluation_evaluator_status evaluation_evaluator_status[]\n  evaluation_instances        evaluation_instances[]\n  user_jobs                   user_jobs[]\n  departments                 Departments?                  @relation(fields: [department_id], references: [id], onUpdate: Restrict, map: \"users_ibfk_1\")\n  jobs                        jobs?                         @relation(fields: [job_id], references: [id], onUpdate: Restrict, map: \"users_ibfk_2\")\n\n  @@index([department_id], map: \"department_id\")\n  @@index([job_id], map: \"job_id\")\n}\n\nenum evaluation_evaluator_status_status {\n  pending\n  completed\n}\n\nenum evaluation_rounds_status {\n  open\n  closed\n}\n\nenum evaluation_instances_status {\n  pending_staff\n  pending_evaluator\n  completed\n}\n\nenum users_role {\n  admin\n  evaluator\n  staff\n}\n",
  "inlineSchemaHash": "7b5999b55d52dac462aa313c55b05f2d6976b46990141db64530fd9b37dfb443",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Departments\":{\"dbName\":\"departments\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jobs\",\"nativeType\":null,\"relationName\":\"DepartmentsTojobs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"DepartmentsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"evaluation_criteria\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"parent_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"max_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":10,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sort_order\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_criteria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_criteria\",\"nativeType\":null,\"relationName\":\"evaluation_criteriaToevaluation_criteria\",\"relationFromFields\":[\"parent_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"other_evaluation_criteria\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_criteria\",\"nativeType\":null,\"relationName\":\"evaluation_criteriaToevaluation_criteria\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_criteria_inputs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_criteria_inputs\",\"nativeType\":null,\"relationName\":\"evaluation_criteriaToevaluation_criteria_inputs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_evaluator_scores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_evaluator_scores\",\"nativeType\":null,\"relationName\":\"evaluation_criteriaToevaluation_evaluator_scores\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"evaluation_criteria_inputs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_instance_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"criteria_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_input_text\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"staff_attachment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_criteria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_criteria\",\"nativeType\":null,\"relationName\":\"evaluation_criteriaToevaluation_criteria_inputs\",\"relationFromFields\":[\"criteria_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_instances\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_instances\",\"nativeType\":null,\"relationName\":\"evaluation_criteria_inputsToevaluation_instances\",\"relationFromFields\":[\"evaluation_instance_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"evaluation_instance_id\",\"criteria_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"evaluation_instance_id\",\"criteria_id\"]}],\"isGenerated\":false},\"evaluation_evaluator_scores\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_evaluator_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"criteria_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"comment\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_evaluator_status\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_evaluator_status\",\"nativeType\":null,\"relationName\":\"evaluation_evaluator_scoresToevaluation_evaluator_status\",\"relationFromFields\":[\"evaluation_evaluator_status_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_criteria\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_criteria\",\"nativeType\":null,\"relationName\":\"evaluation_criteriaToevaluation_evaluator_scores\",\"relationFromFields\":[\"criteria_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"evaluation_evaluator_status_id\",\"criteria_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"evaluation_evaluator_status_id\",\"criteria_id\"]}],\"isGenerated\":false},\"evaluation_evaluator_status\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_instance_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluator_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"evaluation_evaluator_status_status\",\"nativeType\":null,\"default\":\"pending\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_evaluator_scores\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_evaluator_scores\",\"nativeType\":null,\"relationName\":\"evaluation_evaluator_scoresToevaluation_evaluator_status\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"evaluation_evaluator_statusTousers\",\"relationFromFields\":[\"evaluator_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_instances\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_instances\",\"nativeType\":null,\"relationName\":\"evaluation_evaluator_statusToevaluation_instances\",\"relationFromFields\":[\"evaluation_instance_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"evaluation_instance_id\",\"evaluator_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"evaluation_instance_id\",\"evaluator_id\"]}],\"isGenerated\":false},\"evaluation_hierarchies\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluatee_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluator_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs_evaluation_hierarchies_evaluatee_job_idTojobs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jobs\",\"nativeType\":null,\"relationName\":\"evaluation_hierarchies_evaluatee_job_idTojobs\",\"relationFromFields\":[\"evaluatee_job_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs_evaluation_hierarchies_evaluator_job_idTojobs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jobs\",\"nativeType\":null,\"relationName\":\"evaluation_hierarchies_evaluator_job_idTojobs\",\"relationFromFields\":[\"evaluator_job_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"evaluatee_job_id\",\"evaluator_job_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"evaluatee_job_id\",\"evaluator_job_id\"]}],\"isGenerated\":false},\"evaluation_instances\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"round_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluatee_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluated_job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"evaluation_instances_status\",\"nativeType\":null,\"default\":\"pending_staff\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"total_score_average\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_criteria_inputs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_criteria_inputs\",\"nativeType\":null,\"relationName\":\"evaluation_criteria_inputsToevaluation_instances\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_evaluator_status\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_evaluator_status\",\"nativeType\":null,\"relationName\":\"evaluation_evaluator_statusToevaluation_instances\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_rounds\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_rounds\",\"nativeType\":null,\"relationName\":\"evaluation_instancesToevaluation_rounds\",\"relationFromFields\":[\"round_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"evaluation_instancesTousers\",\"relationFromFields\":[\"evaluatee_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jobs\",\"nativeType\":null,\"relationName\":\"evaluation_instancesTojobs\",\"relationFromFields\":[\"evaluated_job_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"round_id\",\"evaluatee_id\",\"evaluated_job_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"round_id\",\"evaluatee_id\",\"evaluated_job_id\"]}],\"isGenerated\":false},\"evaluation_rounds\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"target_score\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"5\",\"2\"]],\"default\":100,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"evaluation_rounds_status\",\"nativeType\":null,\"default\":\"open\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"nativeType\":[\"Date\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_instances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_instances\",\"nativeType\":null,\"relationName\":\"evaluation_instancesToevaluation_rounds\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"jobs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_level\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_hierarchies_evaluation_hierarchies_evaluatee_job_idTojobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_hierarchies\",\"nativeType\":null,\"relationName\":\"evaluation_hierarchies_evaluatee_job_idTojobs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_hierarchies_evaluation_hierarchies_evaluator_job_idTojobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_hierarchies\",\"nativeType\":null,\"relationName\":\"evaluation_hierarchies_evaluator_job_idTojobs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_instances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_instances\",\"nativeType\":null,\"relationName\":\"evaluation_instancesTojobs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departments\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Departments\",\"nativeType\":null,\"relationName\":\"DepartmentsTojobs\",\"relationFromFields\":[\"department_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_jobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_jobs\",\"nativeType\":null,\"relationName\":\"jobsTouser_jobs\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"jobsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"settings\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"setting_key\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"setting_value\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"Text\",[]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"user_jobs\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"nativeType\":null,\"relationName\":\"user_jobsTousers\",\"relationFromFields\":[\"user_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jobs\",\"nativeType\":null,\"relationName\":\"jobsTouser_jobs\",\"relationFromFields\":[\"job_id\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"user_id\",\"job_id\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"user_id\",\"job_id\"]}],\"isGenerated\":false},\"users\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"prefix\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"50\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"firstname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastname\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"username\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"100\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"users_role\",\"nativeType\":null,\"default\":\"staff\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"department_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"job_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"profile_image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"line_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":[\"VarChar\",[\"255\"]],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"0\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_evaluator_status\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_evaluator_status\",\"nativeType\":null,\"relationName\":\"evaluation_evaluator_statusTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"evaluation_instances\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"evaluation_instances\",\"nativeType\":null,\"relationName\":\"evaluation_instancesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_jobs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"user_jobs\",\"nativeType\":null,\"relationName\":\"user_jobsTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departments\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Departments\",\"nativeType\":null,\"relationName\":\"DepartmentsTousers\",\"relationFromFields\":[\"department_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jobs\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"jobs\",\"nativeType\":null,\"relationName\":\"jobsTousers\",\"relationFromFields\":[\"job_id\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"evaluation_evaluator_status_status\":{\"values\":[{\"name\":\"pending\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null}],\"dbName\":null},\"evaluation_rounds_status\":{\"values\":[{\"name\":\"open\",\"dbName\":null},{\"name\":\"closed\",\"dbName\":null}],\"dbName\":null},\"evaluation_instances_status\":{\"values\":[{\"name\":\"pending_staff\",\"dbName\":null},{\"name\":\"pending_evaluator\",\"dbName\":null},{\"name\":\"completed\",\"dbName\":null}],\"dbName\":null},\"users_role\":{\"values\":[{\"name\":\"admin\",\"dbName\":null},{\"name\":\"evaluator\",\"dbName\":null},{\"name\":\"staff\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL_JOB: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL_JOB'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL_JOB || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

