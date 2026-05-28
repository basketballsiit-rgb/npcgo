
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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

exports.evaluation_instances_status = exports.$Enums.evaluation_instances_status = {
  pending_staff: 'pending_staff',
  pending_evaluator: 'pending_evaluator',
  completed: 'completed'
};

exports.evaluation_rounds_status = exports.$Enums.evaluation_rounds_status = {
  open: 'open',
  closed: 'closed'
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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
