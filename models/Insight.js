const mongoose = require('mongoose');

const InsightSchema = new mongoose.Schema(
    {
        job: {
            type: String,
            required: true,
        },
        languages_databases: {
            type: Array,
            required: true,
        },
        frameworks: {
            type: Array,
            required: true,
        },
        methodologies_concepts: {
            type: Array,
            required: true,
        },
        tools: {
            type: Array,
            required: true,
        },
        soft_skills: {
            type: Array,
            required: true,
        },
        education: {
            type: Array,
            required: true,
        },
        job_type: {
            type: Array,
            required: true,
        },
        job_level: {
            type: Array,
            required: true,
        },
        working_arrangements: {
            type: Array,
            required: true,
        },
        company_size: {
            type: Array,
            required: true,
        },
        industries: {
            type: Array,
            required: true,
        },
        hiring_companies: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true
    }
, { collection : 'Insights' });

const Insight = mongoose.models.Insight || mongoose.model('Insight', InsightSchema);

export { Insight };
export default Insight;